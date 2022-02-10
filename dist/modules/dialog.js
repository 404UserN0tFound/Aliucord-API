import { getModule } from "./module";
const dialogModule = getModule((m) => { var _a; return (_a = m.default) === null || _a === void 0 ? void 0 : _a.show; }).default;
function showDialog(options = { title: "Default dialog" }) {
    window["aliucord"].dialog.showDialog(options);
}
export { showDialog };
