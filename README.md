# UltrawideWindows
Expose useful shortcuts to manage windows in a ultrawide monitor and, in general, in a high resolution monitor.
This solution is intended to be an easy-to-use middleground between the default behaviour and the tiling approach.

![](/docs/preview.gif)

# Installation

```bash
$ git clone git@github.com:LucaMoschella/UltrawideWindows.git
$ cd UltrawideWindows
$ plasmapkg2 --type=kwinscript -i .
```

# Usage
Set the desired shortcuts under `System Settings > Shortcuts > Global Shortcuts > KWin`.

My suggestion is to use the following configuration:

| Shortcuts                            | Commands in 3x2 grid                                     |
| ------------------------------------ | -------------------------------------------------------- |
| <kbd>Meta</kbd> + <kbd>Numpad7</kbd> | <kbd>Ultrawide: Move Window to up-left (3x2)</kbd>       |
| <kbd>Meta</kbd> + <kbd>Numpad8</kbd> | <kbd>Ultrawide: Move Window to up-center (3x2)</kbd>     |
| <kbd>Meta</kbd> + <kbd>Numpad9</kbd> | <kbd>Ultrawide: Move Window to up-right (3x2)</kbd>      |
| <kbd>Meta</kbd> + <kbd>Numpad1</kbd> | <kbd>Ultrawide: Move Window to down-left (3x2)</kbd>     |
| <kbd>Meta</kbd> + <kbd>Numpad2</kbd> | <kbd>Ultrawide: Move Window to down-center (3x2)</kbd>   |
| <kbd>Meta</kbd> + <kbd>Numpad3</kbd> | <kbd>Ultrawide: Move Window to down-right (3x2)</kbd>    |
| <kbd>Meta</kbd> + <kbd>Numpad4</kbd> | <kbd>Ultrawide: Move Window to left-height (3x2)</kbd>   |
| <kbd>Meta</kbd> + <kbd>Numpad5</kbd> | <kbd>Ultrawide: Move Window to center-height (3x2)</kbd> |
| <kbd>Meta</kbd> + <kbd>Numpad6</kbd> | <kbd>Ultrawide: Move Window to right-height (3x2)</kbd>  |

| Shortcuts                                             | Commands in 2x2 grid                                           |
| ----------------------------------------------------- | -------------------------------------------------------------- |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad7</kbd> | <kbd>UltrawideWindows: Move Window to up-left (2x2)</kbd>      |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad8</kbd> | <kbd>UltrawideWindows: Move Window to up-width (2x2)</kbd>     |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad9</kbd> | <kbd>UltrawideWindows: Move Window to up-right (2x2)</kbd>     |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad1</kbd> | <kbd>UltrawideWindows: Move Window to down-left (2x2)</kbd>    |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad2</kbd> | <kbd>UltrawideWindows: Move Window to down-width (2x2)</kbd>   |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad3</kbd> | <kbd>UltrawideWindows: Move Window to down-right (2x2)</kbd>   |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad4</kbd> | <kbd>UltrawideWindows: Move Window to left-height (2x2)</kbd>  |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad6</kbd> | <kbd>UltrawideWindows: Move Window to right-height (2x2)</kbd> |

| Shortcuts                                             | General commands           |
| ----------------------------------------------------- | -------------------------- |
| <kbd>Meta</kbd> + <kbd>Numpad0</kbd>                  | <kbd>Maximize window</kbd> |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad0</kbd> | <kbd>Maximize window</kbd> |

##### Notes
* Using only `Ultrawide` shortcuts, even for 2x2 movements, avoids conflicts. They are caused by the standard behaviour of going to the previous position if the window is already in the correct position. I found that the only default one useful is the `maximize windows`, that even if it may work unexpectedly, is convenient to use. If the unexpected bothers you, there is a `Ultrawide` implementation, that doesn't have the _go to the previous position_ feature.
* The animations are lost.
* The default shortcuts works only if the combinations contains even the <kbd>ald</kbd> modifier, probably a KWin problem.

# Update
```bash
$ cd UltrawideWindows
$ ./scripts/update.sh
```
Then disable and re-enable the script.

# Remove

```bash
$ cd UltrawideWindows
$ plasmapkg2 --type=kwinscript -r .
```
