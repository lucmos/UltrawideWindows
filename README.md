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

| Shortcuts                                             | General commands                             |
| ----------------------------------------------------- | -------------------------------------------- |
| <kbd>Meta</kbd> + <kbd>Numpad0</kbd>                  | <kbd>UltrawideWindows: Maximize Window</kbd> |
| <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad0</kbd> | <kbd>UltrawideWindows: Maximize Window</kbd> |

##### Notes
The standard behaviour of going to the previous position if the window is already in the correct position causes conflicts since I do not know how to the framework works.
Using only `Ultrawide` shortcuts, even for 2x2 movements and to maximize the window, avoids these conflicts. However:
* The animations are lost.
* If maximized, a window does not go back to the previous position when maximizing it again. If for you it is a must-have, the default `maximize` doesn't work so bad.


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
