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


* <kbd>Meta</kbd> + <kbd>Numpad7</kbd> -> <kbd>UltrawideWindows: Move Window to Up Left</kbd>
* <kbd>Meta</kbd> + <kbd>Numpad8</kbd> -> <kbd>UltrawideWindows: Move Window to Up Center</kbd>
* <kbd>Meta</kbd> + <kbd>Numpad9</kbd> -> <kbd>UltrawideWindows: Move Window to Up Right</kbd>
* <kbd>Meta</kbd> + <kbd>Numpad1</kbd> -> <kbd>UltrawideWindows: Move Window to Down Left</kbd>
* <kbd>Meta</kbd> + <kbd>Numpad2</kbd> -> <kbd>UltrawideWindows: Move Window to Down Center</kbd>
* <kbd>Meta</kbd> + <kbd>Numpad3</kbd> -> <kbd>UltrawideWindows: Move Window to Down Right</kbd>
* <kbd>Meta</kbd> + <kbd>Numpad4</kbd> -> <kbd>UltrawideWindows: Move Window to Left</kbd>
* <kbd>Meta</kbd> + <kbd>Numpad5</kbd> -> <kbd>UltrawideWindows: Move Window to Center</kbd>
* <kbd>Meta</kbd> + <kbd>Numpad6</kbd> -> <kbd>UltrawideWindows: Move Window to Right</kbd>

---

* <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad7</kbd> -> <kbd>Move Window to Up Left</kbd>
* <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad8</kbd> -> <kbd>Move Window Up</kbd>
* <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad9</kbd> -> <kbd>Move Window to Up Right</kbd>
* <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad1</kbd> -> <kbd>Move Window to Down Left</kbd>
* <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad2</kbd> -> <kbd>Move Window to Down</kbd>
* <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad3</kbd> -> <kbd>Move Window to Down Right</kbd>
* <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad4</kbd> -> <kbd>Move Window to Left</kbd>
* <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad5</kbd> -> <kbd>Maximize window</kbd>
* <kbd>Meta</kbd> + <kbd>Alt</kbd> + <kbd>Numpad6</kbd> -> <kbd>Move Window to Right</kbd>


* <kbd>Meta</kbd> + <kbd>Numpad0</kbd> -> <kbd>Maximize window</kbd>


# Remove

```bash
$ cd UltrawideWindows
$ plasmapkg2 --type=kwinscript -r .
```
