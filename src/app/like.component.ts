/**
 * Created by neven on 21/12/2017.
 */

export class LikeComponent {
    constructor(public likesCount: number, public isSelected: boolean){}

    onClick() {
        this.likesCount += (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    }
}
