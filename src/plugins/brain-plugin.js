import { Brain } from '@/api/brain.js'

export default {
    install(app, options) {
      // configure the app
      console.log(app, options);
      let store = options.store;
      console.log(store);
  
      // app.config.globalProperties.$createWorkspace = async (w) => {
      //   console.log(w);
      // };


      app.config.globalProperties.$brain= new Brain(options);


    //   app.config.globalProperties.$getDistanceFromLatLonInKm = (
    //     lat1,
    //     lon1,
    //     lat2,
    //     lon2
    //   ) => {
    //     // https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
    //     var R = 6371; // Radius of the earth in km
    //     var dLat = app.config.globalProperties.$deg2rad(lat2 - lat1); // deg2rad below
    //     var dLon = app.config.globalProperties.$deg2rad(lon2 - lon1);
    //     var a =
    //       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //       Math.cos(app.config.globalProperties.$deg2rad(lat1)) *
    //         Math.cos(app.config.globalProperties.$deg2rad(lat2)) *
    //         Math.sin(dLon / 2) *
    //         Math.sin(dLon / 2);
    //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     var d = R * c; // Distance in km
    //     return d;
    //   };
  
  
    //   app.config.globalProperties.$deg2rad=(deg)=> {
    //       return deg * (Math.PI / 180)
    //   };
  
  
    },
  };
  