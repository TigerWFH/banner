<<<<<<< HEAD
export = banner;
export as namespace banner;

declare namespace banner {
    class Beanner<P, S>{
        constructor(props?: any, context?: any);
        setState(state: any);
        fourceUpdate(callBack?: any);
        render(): any;
        props: any;
        state: any;
        context: any;
        refs: any;
=======
declare module "Banner" {
    export class Banner {
        constructor(props: any);
        setState(state: any);
        forceUpdate();
        refs: any;
        state: any;
        props: any;
        context: any;
>>>>>>> 4f229dae45157df2d6e538500ad9c83f8980ecf5
    }
}