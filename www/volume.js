var volume = {
  /**
   * Retrieves the current volumeListener of the device
   *
   * @return Volume of the device. The volumeListener gets normalized to the
   *         range of 0.0 to 1.0.
   */
  getVolume: function (callback) {
    cordova.exec(callback, null, 'Volume', 'getVolume', []);
  },

  setVolumeChangeCallback: function (callback) {
    cordova.exec(callback, null, 'Volume', 'setVolumenChangeCallback', []);
  }

};

module.exports = volume;