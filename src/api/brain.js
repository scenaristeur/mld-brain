//import { v4 as uuidv4 } from 'uuid'
import { asSubjectUpdates, clone, shortId, uuid } from 'https://edge.js.m-ld.org/ext/index.mjs';
import { IoRemotes } from 'https://edge.js.m-ld.org/ext/socket.io.mjs';
import { MemoryLevel } from 'https://edge.js.m-ld.org/ext/memory-level.mjs';


export class Brain {
  constructor(options = {}) {
    this.options = options
    this.meld = null
    this.fakeCpt = 0

//this.init()
    // this.id = uuidv4()
    // this.messages = []
    // this.images = {}
  }

  addParty(){
    console.log(this.meld)
    this.meld.write({ '@id': shortId(), '@type': 'party', name: 'enter party name' })
          .catch(this.showError);
  }

  addItem(){
    let fakeCpt = this.fakeCpt
    this.meld.write({
      '@id': 'items',
      '@list': {
        // We want to append to the list, so the insert index is the child element count
        // [getElement('items', 'tbody').childElementCount]:
        [fakeCpt]:
          { '@id': shortId(), '@type': 'item', quantity: 1 }
      }
    }).catch(this.showError);
    this.fakeCpt++
  
  }

  init(brain_id){
    console.log("init", brain_id)
    //let brain = this
    clone(new MemoryLevel, IoRemotes, {
      // Unique clone identifier
      '@id': uuid(),
      // The m-ld domain name (must conform to an IETF domain name)
      '@domain': `${brain_id}.m-ld.glitch.me`,
      // The 'genesis' is given to us via the server, and indicates whether this domain is brand-new
      //genesis: getCookie('is-genesis') === 'true',
      // Change this flag to reduce console logging by m-ld
      logLevel: 'debug',
      io: {uri: `https://m-ld.glitch.me`}
    }).then(async meld => {
      // We call the clone 'meld'
      this.meld = meld;
      console.log('meld', this.meld)
      //brain.meld = meld
      // Wait for the clone to be fully up-to-date.
      await meld.status.becomes({ outdated: false });
          // Read the latest data from m-ld and populate the form.
          meld.read(
            // The read method holds the clone state constant until the first callback resolves, so we
            // can be sure nothing is changing. The second callback is called for every update
            // afterwards.
            async state => {
              // Each 'party' is a stand-alone subject in the domain. Just describe every subject marked
              // as the 'party' type.
              const parties = await state.read({
                '@describe': '?id',
                '@where': { '@id': '?id', '@type': 'party' }
              });
              console.log('parties', parties)
              //parties.forEach(party => this.appendPartyElement(party));
              // The 'items' are stored as a list, which has the fixed identity 'items'. Using
              // construct, which does a pattern match, we can retrieve not only the identities of the
              // items but also their contents.
              const itemsList = await state.read({
                '@construct': {
                  '@id': 'items',
                  // This says: retrieve every list index ('?' denotes a variable), and for the item in
                  // each index give me every property and value (the variable names are just for
                  // readability, they could all just be '?')
                  '@list': { '?index': { '@id': '?itemId', '?prop': '?value' } }
                }
              });
              itemsList[0]?.['@list'].forEach(item => {
                console.log(item)
                // const itemElement = itemTableBody.appendChild(this.createItemElement(item['@id']));
                // this.updateItemElement(item, itemElement);
              });
              // Ready for user input!
              //getElement('add-party').disabled = false;
              //getElement('add-item').disabled = false;
            },
            // For every update, the state is held constant while we process it, until
            // the returned promise resolves.
            async (update, state) => {
              // There are many possible ways to handle updates. Here, we generally ignore the
              // fine-grained update information and just load the current state of the affected
              // subject (party or item). First we re-arrange the update to be indexed by subject ID.
              await Promise.all(Object.entries(asSubjectUpdates(update)).map(async ([id, subjectUpdate]) => {
                // Do we already have an element for the updated subject?
                console.log('update', id, subjectUpdate)
                let element = await this.describe(state, id);
                console.log('element', element)
                // const element = getElement(id);
                // if (element?.classList.contains('party')) {
                //   // If the subject is a party for which we already have an element, describe the
                //   // current party in full and update the element.
                //   const party = await this.describe(state, id);
                //   if (party != null)
                //     this.updatePartyElement(party, element);
                //   else
                //     element.remove();
                // } else if (subjectUpdate['@insert']?.['@type'] === 'party') {
                //   // If the update is a brand-new party we haven't seen before, we don't need to load
                //   // the current state as it's all in the update itself.
                //   this.appendPartyElement(subjectUpdate['@insert']);
                // } else if (element?.classList.contains('item')) {
                //   // If the subject is an item for which we already have an element, describe the
                //   // current item in full and update the element.
                //   const item = await this.describe(state, id);
                //   if (item != null)
                //     this.updateItemElement(item, element);
                // } else if (id === 'items') {
                //   // If the items list content has changed, describe the items list in full. Note that
                //   // using describe will only load the item references, not all the contents. That's
                //   // fine because we probably already have some of the item content, and we can be more
                //   // surgical about what state to ask m-ld for.
                //   const itemRefs = (await this.describe(state, 'items'))?.['@list'] ?? [];
                //   // Items will appear in-order after the hidden item HTML template
                //   let prev = getElement('item-template'), toLoad = [];
                //   for (let { '@id': id } of itemRefs) {
                //     // If we don't already have the item content in an element, we'll need to load it.
                //     // For now just create a placeholder element.
                //     const element = getElement(id) ?? (toLoad.push(id) && this.createItemElement(id));
                //     prev.insertAdjacentElement('afterend', element);
                //     prev = element;
                //   }
                //   // After going through all the current items, if there are any elements left over
                //   // these must have been removed from the form and we can safely delete them.
                //   while (prev.nextElementSibling)
                //     prev.nextElementSibling.remove();
                //   // Finally, load every item we hadn't seen already in full
                //   await Promise.all(toLoad.map(async id => {
                //     this.updateItemElement(await this.describe(state, id), getElement(id));
                //   }));
                // }
              }));
            });
    })
  }

  async describe(state, id) {
    return (await state.read({ '@describe': id }))[0];
  }

  goto(goto_id) {
    console.log('goto', goto_id, this.options)
    this.options.router.push({ path: '/brain', hash: "#" + goto_id })

  }
  setCurrent(brain_id) {
    this.current = brain_id
    this.options.store.commit("core/setCurrent", brain_id)
    this.init(brain_id)

  }
//   onNewUserMessage(userMessage) {
//     let message_id = uuidv4()
//     console.log('userMessage', message_id, userMessage)
//     this.messages.push({
//       id: message_id,
//       text: userMessage,
//       isUser: true,
//       date: Date.now()
//     })

//     console.log(this)
//   }

//   getClean(storyName) {
//     let story = {
//       id: this.id,
//       name: storyName,
//       date: Date.now(),
//       likes: 0,
//       //adventure: this.aventure,
//       mission: this.options.mission,
//       messages: this.messages
//     }
//     let images = this.images
//     return {story, images}
//   }
}