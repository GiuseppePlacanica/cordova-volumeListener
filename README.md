Cordova Device Volume Listen Plugin
==================================

## -- EN --

## Usage

The plugin exposes one method
`window.plugin.volume.getVolume(callback)`. This methods retrives the
current volume and passes it to the callback. Example:

```
window.plugin.volume.getVolume(function(volume) {
  alert("The current volume is " + volume);
});
```

On the native code there is a listener to observe the events of the device volume changes.


P.S. The code has been written to listen to Playback events, if you want to listen to different events you need to change
the listener's pointers (at least on the iOS code)


## -- IT --

## Come si usa

Il plugin espone solo un metodo
`window.plugin.volume.getVolume(callback)`. This methods retrives the
current volume and passes it to the callback. Example:

```
window.plugin.volume.getVolume(function(volume) {
  alert("The current volume is " + volume);
});
```

Sul codice nativo è presente un lister per ascoltare gli eventi di cambio del volume del dispositivo.

P.S. Il codice è stato scritto per ascoltare eventi di Audio Playback, se si vogliono ascoltare eventi differenti bisogna cambiare
i puntamenti del listener (almeno sul codice iOS)


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
