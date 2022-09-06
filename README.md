# jsx2css-convert-tool README

This is the README for your extension "jsx2css-convert-tool". After writing up a brief description, we recommend including the following sections.
* 实现jsx行内样式与css样式互转

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

![功能](https://github.com/WangGuibin/ImageBed/blob/main/files/example.gif?raw=true)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.


## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

仍有不足,发现无法转换的案例如下(以后再想办法支持吧):
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    boxShadow: '5px 5px 15px rgb(74, 73, 77)',
    backgroundColor: 'rgb(74, 73, 77)',
```  
但凡是多个属性值的,带多个逗号和引号的,目前处理起来有点难度,就先放着好了,毕竟也解决了一部分了

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

* 实现了jsx行内样式与css的部分转换工作,提高了一丢丢搬砖的效率~

---

## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* 使用方法,先选中需要转换的样式,然后使用快捷键`ctrl/cmd + shift + t` 或者右键菜单点`jsx <=> css`

## For more information

* [JSX行内样式与CSS样式互转工具 - CoderWGB - 博客园](https://www.cnblogs.com/wgb1234/p/16659565.html)

* [jsx2css-convert-tool-vscode-extension](https://github.com/WangGuibin/jsx2css-convert-tool-vscode-extension)

**Enjoy!**
