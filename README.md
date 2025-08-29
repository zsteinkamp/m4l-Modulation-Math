# Modulation Math

This is a Max For Live device that lets you combine two modulation signals using math. This allows you to have more complex modulation than what you can normally do in Ableton Live. You can add, subtract, multiply, and divide two input signals. From there, you can invert, scale, and shift the resulting signal and map it to any other parameter (up to 8 destinations).

You can control how out-of-bounds values are handled, either clipped, fold back, or wrap around.

Here is an image Modulation Math adding two sine wave signals, who are then scaled and foled.
![How it Looks](images/device.gif)

For example, two sine-wave LFOs running at different speeds whose values are multiplied together will produce a complex wave. Another example is to use an LFO for vibrato, but manually control a second offset with a MIDI controller.

[Video showing it in action.](https://www.youtube.com/watch?v=YfRTARPEUME)

## Installation

[Download the newest .amxd file from the latest [release](https://github.com/zsteinkamp/m4l-Modulation-Math/releases).

Note: If you want to open and edit the non-frozen device, you will need to have [zs.mapper](https://github.com/zsteinkamp/m4l-zs.mapper) installed. [Follow the installation instructions](https://github.com/zsteinkamp/m4l-zs.mapper) there.

## Changelog

* 2025-08-28 [v10](https://github.com/zsteinkamp/m4l-Modulation-Math/releases/download/v10/ModulationMath-v10.amxd) - Reimplement fold and wrap in native Max instead of JS.
* 2025-08-28 [v9](https://github.com/zsteinkamp/m4l-Modulation-Math/releases/download/v9/ModulationMath-v9.amxd) - Add Clip / Fold / Wrap option for out-of-range values. Thanks @jonahjnewton for the request!
* 2024-10-29 [v8](https://github.com/zsteinkamp/m4l-Modulation-Math/releases/download/v8/ModulationMath-v8.amxd) - Add non-blocking telemetry ping on load. Does not send any identifying information, only the plugin name, the local computer name, type of computer, and CPU type. I just want to see which plugins are used the most.
* 2022-12-05 [v7](https://github.com/zsteinkamp/m4l-Modulation-Math/releases/download/v7/Modulation.Math.v7.amxd) - Support Live 12's new modulation mode, visual improvements.
* 2022-12-05 [v6](https://github.com/zsteinkamp/m4l-Modulation-Math/raw/main/frozen/Modulation%20Math%20v6.amxd) - Rename to 'Modulation Math', use integer version numbers.
* 2022-05-16 [0.0.5](https://github.com/zsteinkamp/m4l-Modulation-Math/raw/main/frozen/AutomationMath-0.0.5.amxd) - Configure the `live.banks` object for Push2 knob assignments.
* 2022-04-27 [0.0.4](https://github.com/zsteinkamp/m4l-Modulation-Math/raw/main/frozen/AutomationMath-0.0.4.amxd) - Add multiple mapping destinations.  (thanks AYA)
* 2022-04-26 [0.0.3](https://github.com/zsteinkamp/m4l-Modulation-Math/raw/main/frozen/AutomationMath-0.0.3.amxd) - Fix bug with multiple instances. (thanks Spin)
* 2022-04-09 [0.0.2](https://github.com/zsteinkamp/m4l-Modulation-Math/raw/main/frozen/AutomationMath-0.0.2.amxd) - Change layout to match LFO device.
* 2022-04-08 [0.0.1](https://github.com/zsteinkamp/m4l-Modulation-Math/raw/main/frozen/AutomationMath-0.0.1.amxd) - Initial release.

## Usage

Usually, you would map a MIDI controller or modulation source to `Input A` and `Input B`. Choose an operator, and then map the output to some other parameter. The example above shows it mapped to the Auto Filter Frequency.

The scale and shift knobs operate on the output signal, in that order.

The invert toggle (Ø) will flip the output signal, so 0 becomes 1, and 1 becomes 0.

To handle values greater than 1 or less than 0, you can use the Clip / Fold / Wrap option.

* ** Clip ** - Result values less than 0 are 0. Result values greater than 1 are 1.
* ** Fold ** - Result values fold back at the 0 and 1 boundaries, so 1.1 becomes 0.9.
* ** Wrap ** - Result values wrap around, so 1.1 becomes 0.1.


## Attention to Detail

* Works with any well designed theme.
* Good Push / Push2 integration.
* Fully automatable, with sensible and consistent parameter names.

## TODO

* ...

## Contributing

I'd love it if others extended this device. If you would like to contribute, simply fork this repo, make your changes, and open a pull request and I'll have a look.
