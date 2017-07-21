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
    }
}