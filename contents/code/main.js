
function getPosition(workspace, client, numberXslots, numberYslots, x, y) {
    var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
    var width = maxArea.width / numberXslots;
    var height = maxArea.height / numberYslots;
    var newX = maxArea.x + width * x;
    var newY = maxArea.y + height * y;
    return [newX, newY, width, height]
}

function move(workspace, numberXslots, numberYslots, x, y) {
    var client = workspace.activeClient;
    if (client.moveable) {
        arr = getPosition(workspace, client, numberXslots, numberYslots, x, y);
        var newX = arr[0],
            newY = arr[1],
            w = arr[2],
            h = arr[3];
        client.geometry = {
            x: newX,
            y: newY,
            width: w,
            height: h
        };
    }
}


registerShortcut("MoveWindowToUpLeft", "UltrawideWindows: Move Window  DEBUG to Up Left", "Meta+Num+7", function () {
    move(workspace, 3, 2, 0, 0)
});

registerShortcut("MoveWindowToUpCenter", "UltrawideWindows: Move Window  DEBUG to Up Center", "Meta+Num+8", function () {
    move(workspace, 3, 2, 1, 0)
});

registerShortcut("MoveWindowToUpRight", "UltrawideWindows: Move Window  DEBUG to Up Right", "Meta+Num+9", function () {
    move(workspace, 3, 2, 2, 0)
});

registerShortcut("MoveWindowToDownLeft", "UltrawideWindows: Move Window  DEBUG to Down Left", "Meta+Num+1", function () {
    move(workspace, 3, 2, 0, 1)
});

registerShortcut("MoveWindowToDownCenter", "UltrawideWindows: Move Window  DEBUG to Down Center", "Meta+Num+2", function () {
    move(workspace, 3, 2, 1, 1)
});

registerShortcut("MoveWindowToDownRight", "UltrawideWindows: Move Window  DEBUG to Down Right", "Meta+Num+3", function () {
    move(workspace, 3, 2, 2, 1)
});

registerShortcut("MoveWindowToLeft", "UltrawideWindows: Move Window  DEBUG to Left", "Meta+Num+4", function () {
    move(workspace, 3, 1, 0, 0)
});

registerShortcut("MoveWindowToCenter", "UltrawideWindows: Move Window  DEBUG to Center", "Meta+Num+5", function () {
    move(workspace, 3, 1, 1, 0)
});

registerShortcut("MoveWindowToRight", "UltrawideWindows: Move Window  DEBUG to Right", "Meta+Num+6", function () {
    move(workspace, 3, 1, 2, 0)
});
