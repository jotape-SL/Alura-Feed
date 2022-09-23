import {Breakpoints} from '@skynexui/responsive_stylesheet';

type ResponsiveProperty<T> = Partial<Record<Breakpoints, T>>

export interface StyleSheet{
  fontFamily:ResponsiveProperty<string> | string,
  backgroungColor: ResponsiveProperty<string> | string,
}
