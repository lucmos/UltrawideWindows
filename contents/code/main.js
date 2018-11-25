registerShortcut("MoveWindowToUpLeft", "Move Window to Up Left", "Meta+Num+7", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var width = maxArea.width / 3;
        var height = maxArea.height / 2;
        var newX = width * 0;
        var newY = height * 0;
        client.geometry = {
            x: maxArea.x + newX,
            y: maxArea.y + newY,
            width: width,
            height: height
        };
    }
});

registerShortcut("MoveWindowToUpCenter", "Move Window to Up Center", "Meta+Num+8", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var width = maxArea.width / 3;
        var height = maxArea.height / 2;
        var newX = width * 1;
        var newY = height * 0;
        client.geometry = {
            x: maxArea.x + newX,
            y: maxArea.y + newY,
            width: width,
            height: height
        };
    }
});

registerShortcut("MoveWindowToUpRight", "Move Window to Up Right", "Meta+Num+9", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var width = maxArea.width / 3;
        var height = maxArea.height / 2;
        var newX = width * 2;
        var newY = height * 0;
        client.geometry = {
            x: maxArea.x + newX,
            y: maxArea.y + newY,
            width: width,
            height: height
        };
    }
});

registerShortcut("MoveWindowToDownLeft", "Move Window to Down Left", "Meta+Num+1", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var width = maxArea.width / 3;
        var height = maxArea.height / 2;
        var newX = width * 0;
        var newY = height * 1;
        client.geometry = {
            x: maxArea.x + newX,
            y: maxArea.y + newY,
            width: width,
            height: height
        };
    }
});

registerShortcut("MoveWindowToDownCenter", "Move Window to Down Center", "Meta+Num+2", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var width = maxArea.width / 3;
        var height = maxArea.height / 2;
        var newX = width * 1;
        var newY = height * 1;
        client.geometry = {
            x: maxArea.x + newX,
            y: maxArea.y + newY,
            width: width,
            height: height
        };
    }
});

registerShortcut("MoveWindowToDownRight", "Move Window to Down Right", "Meta+Num+3", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var width = maxArea.width / 3;
        var height = maxArea.height / 2;
        var newX = width * 2;
        var newY = height * 1;
        client.geometry = {
            x: maxArea.x + newX,
            y: maxArea.y + newY,
            width: width,
            height: height
        };
    }
});

registerShortcut("MoveWindowToLeft", "Move Window to Left", "Meta+Num+4", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var width = maxArea.width / 3;
        var height = maxArea.height;
        var newX = width * 0;
        var newY = 0;
        client.geometry = {
            x: maxArea.x + newX,
            y: maxArea.y + newY,
            width: width,
            height: height
        };
    }
});

registerShortcut("MoveWindowToCenter", "Move Window to Center", "Meta+Num+5", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var width = maxArea.width / 3;
        var height = maxArea.height;
        var newX = width * 1;
        var newY = 0;
        client.geometry = {
            x: maxArea.x + newX,
            y: maxArea.y + newY,
            width: width,
            height: height
        };
    }
});

registerShortcut("MoveWindowToRight", "Move Window to Right", "Meta+Num+6", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        var width = maxArea.width / 3;
        var height = maxArea.height;
        var newX = width * 2;
        var newY = 0;
        client.geometry = {
            x: maxArea.x + newX,
            y: maxArea.y + newY,
            width: width,
            height: height
        };
    }
});
