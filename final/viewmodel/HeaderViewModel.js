import { of } from "rxjs";
var HeaderViewModel = /** @class */ (function () {
    function HeaderViewModel() {
        this.sections = ["About", "Games", "Work"];
    }
    HeaderViewModel.prototype.getData = function () {
        return of(this.sections);
    };
    return HeaderViewModel;
}());
export default HeaderViewModel;
//# sourceMappingURL=HeaderViewModel.js.map