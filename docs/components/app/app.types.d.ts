import { IComponentProps, IThemable } from "../../types";
export interface IAppProps extends IComponentProps, IThemable {
    /**
     * Designates some space for the NavBar
     *
     * @docType boolean
     * @defaultValue `false`
     */
    hasNavBar?: boolean;
    /**
     * Designates some space for the NavRail
     *
     * @docType boolean
     * @defaultValue `false`
     */
    hasNavRail?: boolean;
}
export interface IMainProps extends IComponentProps {
}
