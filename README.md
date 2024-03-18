# UltrawideWindows
Expose useful shortcuts to manage windows in a ultrawide monitor and, in general, in a high resolution monitor.
This solution is intended to be an easy-to-use middleground between the default behaviour and the tiling approach.

![](/docs/preview2.gif)
![](/docs/preview.gif)

# Installation

```bash
$ git clone git@github.com:lucmos/UltrawideWindows.git
$ cd UltrawideWindows
$ plasmapkg2 --type=kwinscript -i .
$ kwin_x11 --replace &
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

| Shortcuts                            | Commands in 2x2 grid                                           |
| ------------------------------------ | -------------------------------------------------------------- |
| <kbd>ctrl</kbd> + <kbd>Numpad7</kbd> | <kbd>UltrawideWindows: Move Window to up-left (2x2)</kbd>      |
| <kbd>ctrl</kbd> + <kbd>Numpad8</kbd> | <kbd>UltrawideWindows: Move Window to up-width (2x2)</kbd>     |
| <kbd>ctrl</kbd> + <kbd>Numpad9</kbd> | <kbd>UltrawideWindows: Move Window to up-right (2x2)</kbd>     |
| <kbd>ctrl</kbd> + <kbd>Numpad1</kbd> | <kbd>UltrawideWindows: Move Window to down-left (2x2)</kbd>    |
| <kbd>ctrl</kbd> + <kbd>Numpad2</kbd> | <kbd>UltrawideWindows: Move Window to down-width (2x2)</kbd>   |
| <kbd>ctrl</kbd> + <kbd>Numpad3</kbd> | <kbd>UltrawideWindows: Move Window to down-right (2x2)</kbd>   |
| <kbd>ctrl</kbd> + <kbd>Numpad4</kbd> | <kbd>UltrawideWindows: Move Window to left-height (2x2)</kbd>  |
| <kbd>ctrl</kbd> + <kbd>Numpad6</kbd> | <kbd>UltrawideWindows: Move Window to right-height (2x2)</kbd> |

| Shortcuts                                                                 | Commands in 4x2 grid (center biased)                                                 |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad7</kbd>                    | <kbd>UltrawideWindows: Move Window to up-left (4x2 center biased)</kbd>              |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad8</kbd>                    | <kbd>UltrawideWindows: Move Window to up-width (4x2 center biased)</kbd>             |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad9</kbd>                    | <kbd>UltrawideWindows: Move Window to up-right (4x2 center biased)</kbd>             |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad1</kbd>                    | <kbd>UltrawideWindows: Move Window to down-left (4x2 center biased)</kbd>            |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad2</kbd>                    | <kbd>UltrawideWindows: Move Window to down-width (4x2 center biased)</kbd>           |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad3</kbd>                    | <kbd>UltrawideWindows: Move Window to down-right (4x2 center biased)</kbd>           |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad4</kbd>                    | <kbd>UltrawideWindows: Move Window to left-height (4x2 center biased)</kbd>          |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>Numpad4</kbd> | <kbd>UltrawideWindows: Move Window to center-left-height (4x2 center biased)</kbd>   |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad5</kbd>                    | <kbd>UltrawideWindows: Move Window to center-height (4x2 center biased)</kbd>        |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>Numpad6</kbd> | <kbd>UltrawideWindows: Move Window to center-right-height (4x2 center biased)</kbd>  |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad6</kbd>                    | <kbd>UltrawideWindows: Move Window to right-height (4x2 center biased)</kbd>         |

| Shortcuts                                                                 | Commands to fit 3/4 of the width                                                     |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>Numpad8</kbd> | <kbd>UltrawideWindows: Move Window to fit left-height 3/4 width</kbd>   |
| <kbd>ctrl</kbd> + <kbd>Meta</kbd> + <kbd>shift</kbd> + <kbd>Numpad9</kbd> | <kbd>UltrawideWindows: Move Window to fit right-height 3/4 width</kbd>  |

| Shortcuts                           | Commands to fit 2/3 of the width                                       |
| ----------------------------------- | ---------------------------------------------------------------------- |
| <kbd>alt</kbd> + <kbd>Numpad7</kbd> | <kbd>UltrawideWindows: Move Window to fit up-left 2/3 width</kbd>      |
| <kbd>alt</kbd> + <kbd>Numpad1</kbd> | <kbd>UltrawideWindows: Move Window to fit down-left 2/3 width</kbd>    |
| <kbd>alt</kbd> + <kbd>Numpad9</kbd> | <kbd>UltrawideWindows: Move Window to fit up-right 2/3 width</kbd>     |
| <kbd>alt</kbd> + <kbd>Numpad3</kbd> | <kbd>UltrawideWindows: Move Window to fit down-right 2/3 width</kbd>   |
| <kbd>alt</kbd> + <kbd>Numpad4</kbd> | <kbd>UltrawideWindows: Move Window to fit left-height 2/3 width</kbd>  |
| <kbd>alt</kbd> + <kbd>Numpad6</kbd> | <kbd>UltrawideWindows: Move Window to fit right-height 2/3 width</kbd> |
| <kbd>alt</kbd> + <kbd>Numpad8</kbd> | <kbd>UltrawideWindows: Move Window to up-width (2x2)</kbd>             |
| <kbd>alt</kbd> + <kbd>Numpad2</kbd> | <kbd>UltrawideWindows: Move Window to down-width (2x2)</kbd>           |

| Shortcuts                                             | Commands in 6x2 grid (center biased)                                                |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------- |
| <kbd>alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad7</kbd> | <kbd>UltrawideWindows: Move Window to up-left 2/3 width (center biased)</kbd>       |
| <kbd>alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad8</kbd> | <kbd>UltrawideWindows: Move Window to up-width 2/3 width (center biased)</kbd>      |
| <kbd>alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad9</kbd> | <kbd>UltrawideWindows: Move Window to up-right 2/3 width (center biased)</kbd>      |
| <kbd>alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad1</kbd> | <kbd>UltrawideWindows: Move Window to down-left 2/3 width (center biased)</kbd>     |
| <kbd>alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad2</kbd> | <kbd>UltrawideWindows: Move Window to down-width 2/3 width (center biased)</kbd>    |
| <kbd>alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad3</kbd> | <kbd>UltrawideWindows: Move Window to down-right 2/3 width (center biased)</kbd>    |
| <kbd>alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad4</kbd> | <kbd>UltrawideWindows: Move Window to left-height 2/3 width (center biased)</kbd>   |
| <kbd>alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad5</kbd> | <kbd>UltrawideWindows: Move Window to center-height 2/3 width (center biased)</kbd> |
| <kbd>alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad6</kbd> | <kbd>UltrawideWindows: Move Window to right-height 2/3 width (center biased)</kbd>  |

| Shortcuts                                              | General commands (easy to use)                       |
| ------------------------------------------------------ | ---------------------------------------------------- |
| <kbd>Meta</kbd> + <kbd>Numpad0</kbd>                   | <kbd>UltrawideWindows: Maximize Window</kbd>         |
| <kbd>Alt</kbd> + <kbd>Numpad0</kbd>                    | <kbd>UltrawideWindows: Maximize Window (copy)</kbd>  |
| <kbd>Ctrl</kbd>+ <kbd>Numpad0</kbd>                    | <kbd>UltrawideWindows: Maximize Window (copy2)</kbd> |
| <kbd>Ctrl</kbd> + <kbd>Meta</kbd> + <kbd>Numpad0</kbd> | <kbd>UltrawideWindows: Maximize Window (copy3)</kbd> |
| <kbd>Alt</kbd> + <kbd>Meta</kbd> + <kbd>Numpad0</kbd>  | <kbd>UltrawideWindows: Maximize Window (copy4)</kbd> |
| <kbd>Alt</kbd> + <kbd>Numpad5</kbd>                    | <kbd>UltrawideWindows: Center Window</kbd>           |
| <kbd>Ctrl</kbd> + <kbd>Numpad5</kbd>                   | <kbd>UltrawideWindows: Center Window (copy)</kbd>    |





##### Notes
The standard behaviour of going to the previous position if the window is already in the correct position causes conflicts.
Using only `Ultrawide` shortcuts, avoids these conflicts. However:
* The animations are lost.
* If maximized, a window does not go back to the previous position when maximizing it again. If for you it is a must-have, the default `maximize` doesn't work so bad.


# Update


```bash
$ cd UltrawideWindows
$ ./scripts/update.sh
```

# Remove

```bash
$ cd UltrawideWindows
$ plasmapkg2 --type=kwinscript -r .
```
