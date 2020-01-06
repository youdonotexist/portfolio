import {of} from "rxjs"

class HeaderViewModel {
    private sections: string[] = ["About", "Games", "Work"];

    public getData() {
        return of(this.sections);
    }
}

export default HeaderViewModel;