//import { v4 as uuidv4 } from 'uuid'

export class Brain {
  constructor(options = {}) {
    this.options = options
    this.router = options.router

    // this.id = uuidv4()
    // this.messages = []
    // this.images = {}
  }

  goto(goto_id) {
    console.log('goto', goto_id, this.options)
    this.router.push({ path: '/brain', hash: "#" + goto_id })
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