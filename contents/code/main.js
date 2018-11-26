
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

// GRID 3x2
registerShortcut("MoveWindowToUpLeft3x2", "UltrawideWindows: Move Window to up-left (3x2)", "Meta+Num+7", function () {
    move(workspace, 3, 2, 0, 0)
});

registerShortcut("MoveWindowToUpCenter3x2", "UltrawideWindows: Move Window to up-center (3x2)", "Meta+Num+8", function () {
    move(workspace, 3, 2, 1, 0)
});

registerShortcut("MoveWindowToUpRight3x2", "UltrawideWindows: Move Window to up-right (3x2)", "Meta+Num+9", function () {
    move(workspace, 3, 2, 2, 0)
});

registerShortcut("MoveWindowToDownLeft3x2", "UltrawideWindows: Move Window to down-left (3x2)", "Meta+Num+1", function () {
    move(workspace, 3, 2, 0, 1)
});

registerShortcut("MoveWindowToDownCenter3x2", "UltrawideWindows: Move Window to down-center (3x2)", "Meta+Num+2", function () {
    move(workspace, 3, 2, 1, 1)
});

registerShortcut("MoveWindowToDownRight3x2", "UltrawideWindows: Move Window to down-right (3x2)", "Meta+Num+3", function () {
    move(workspace, 3, 2, 2, 1)
});

registerShortcut("MoveWindowToLeftHeight3x2", "UltrawideWindows: Move Window to left-height (3x2)", "Meta+Num+4", function () {
    move(workspace, 3, 1, 0, 0)
});

registerShortcut("MoveWindowToCenterHeight3x2", "UltrawideWindows: Move Window to center-height (3x2)", "Meta+Num+5", function () {
    move(workspace, 3, 1, 1, 0)
});

registerShortcut("MoveWindowToRightHeight3x2", "UltrawideWindows: Move Window to right-height (3x2)", "Meta+Num+6", function () {
    move(workspace, 3, 1, 2, 0)
});

// GRID 2x2
registerShortcut("MoveWindowToUpLeft2x2", "UltrawideWindows: Move Window to up-left (2x2)", "Meta+alt+Num+7", function () {
    move(workspace, 2, 2, 0, 0)
});

registerShortcut("MoveWindowToUpCenter2x2", "UltrawideWindows: Move Window to up-width (2x2)", "Meta+alt+Num+8", function () {
    move(workspace, 1, 2, 0, 0)
});

registerShortcut("MoveWindowToUpRight2x2", "UltrawideWindows: Move Window to up-right (2x2)", "Meta+alt+Num+9", function () {
    move(workspace, 2, 2, 1, 0)
});

registerShortcut("MoveWindowToDownLeft2x2", "UltrawideWindows: Move Window to down-left (2x2)", "Meta+alt+Num+1", function () {
    move(workspace, 2, 2, 0, 1)
});

registerShortcut("MoveWindowToDownCenter2x2", "UltrawideWindows: Move Window to down-width (2x2)", "Meta+alt+Num+2", function () {
    move(workspace, 1, 2, 0, 1)
});

registerShortcut("MoveWindowToDownRight2x2", "UltrawideWindows: Move Window to down-right (2x2)", "Meta+alt+Num+3", function () {
    move(workspace, 2, 2, 1, 1)
});

registerShortcut("MoveWindowToLeftHeight2x2", "UltrawideWindows: Move Window to left-height (2x2)", "Meta+alt+Num+4", function () {
    move(workspace, 2, 1, 0, 0)
});

registerShortcut("MoveWindowToRightHeight2x2", "UltrawideWindows: Move Window to right-height (2x2)", "Meta+alt+Num+6", function () {
    move(workspace, 2, 1, 1, 0)
});

// General
registerShortcut("MoveWindowToCenterHeight2x2", "UltrawideWindows: Maximize Window", "Meta+alt+Num+5", function () {
    move(workspace, 1, 1, 0, 0)
});
