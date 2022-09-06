// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

//驼峰转中划线
function toMidLine(text) {
	return text.replace(/([A-Z])/g, "-$1").toLowerCase();
}

//中划线转驼峰
function toHump(name) {
	return name.replace(/\-(\w)/g, function (all, letter) {
		return letter.toUpperCase();
	});
}
//jsx => css
function jsx2css(text) {
	text = toMidLine(text).trim();
	text = text.replace(/\"/g, "");
	text = text.replace(/\'/g, "")
	text = text.replace(/,/g, ";")
	return text;
}
//css => jsx
function css2jsx(text) {
	var rowArr = text.split(';');
	rowArr.pop();
	var result = '';
	for (let i = 0; i < rowArr.length; i++) {
		var ele = rowArr[i].split(":");
		var firstEle = ele[0].trim();
		var prefix = toHump(firstEle) + ':'
		var lastEle = ele[1].trim();
		result += prefix + "'" + lastEle + "',";
		result += '\n';
	}
	return result;
}


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('jsx2css-convert-tool.jsx2css', function () {
		// The code you place here will be executed every time your command is executed
		let activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return;
		}
		let selection = activeEditor.selection
		var text = activeEditor.document.getText(selection);

		if (text.match(/[A-Z]/g)) {
			text = jsx2css(text);
		} else {
			text = css2jsx(text);
		}
		activeEditor.edit((editBuilder) => {
			editBuilder.replace(new vscode.Range(selection.start, selection.end), text);
		})
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
