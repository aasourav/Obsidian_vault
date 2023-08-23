#hoverEffect
if we Want to disable hover effect on atnd table row:
``` Code
.ant-table-tbody > tr.ant-table-row:hover > td {
	background: none !important;
}
```

#oddTableColor
if we want to set background color even or odd wise
``` js code
const rowClassName = (_: any, index: number) => {
	return index % 2 === 1 ? "even-row" : "";
};
```
```CSS
.even-row {
	background-color: red;
}
```
```Props
<Table
	rowClassName={rowClassName}
/>
```
