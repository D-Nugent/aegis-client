import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLayoutEffect, useMemo, useState } from 'react';
import styles from './AegisButton.module.scss';

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  ACTION = "action",
  CONFIRM = "confirm",
  LINK = "link",
  ICON = "icon",
  CANCEL = "cancel",
  DROPDOWN = "dropdown",
}

// Primary
// --confirm
// --link

// Secondary
// --cancel
// --action

// Tertiary
// --dropdown

interface AegisButtonProps {
  children: React.ReactNode,
  type: ButtonType,
  action?: (e: React.SyntheticEvent) => void,
  href?: string,
  newWindow?: boolean,
  disabled?: boolean
}

// TODO: Need to consider how to handle button sizing between breakpoints - especially if not
// all buttons change size - should they? Perhaps this is the difference between a btn & link
// TODO: Need to consider whether icons should be added to the button, if so, styling?
// TODO: Need to consider whether there should be a 'loading' prop to the button
// TODO: Consider use-case for a dropdown button (Burger menu?)
// TODO: Consider use-case for an IconButton
// TODO: Button as Link could be as simple as an href being passed.
// TODO: Rather than have to declare the style (primary, secondary, tertiary) in the button, should rather
// have a type prop that can be passed in to the button whether it be a link, submit, reset etc and that decides colour.
// TODO: The 'action' prop should be optional
// Example types:
// - Default
// - Key
// - Confirm
// - Delete
// - Disabled
// - Dropdown
// - Link

const assignTheme = (
  importMethod: { (): Promise<typeof import("*.module.scss")>; (): Promise<any>; },
  currentTheme: { readonly [key: string]: string; }) => {
  return importMethod().then(
    (module) => {
      return (Object.entries(module.default).reduce((acc, [key, value]) => {
        acc[key] = `${acc[key]} ${value}`;
        return acc;
      },{...currentTheme} as any));
    }
    );
}

const themeImports = {
  dark: () => import('./AegisButtonDark.module.scss'),
  default: () => import('./AegisButton.module.scss'),
}

enum selectedThemeProps {
  DEFAULT = 'default',
  DARK = 'dark',
}

export default function AegisButton({
  children,
  type,
  action = () => {},
  href = useRouter().pathname,
  newWindow = false,
  disabled = false
}: AegisButtonProps) {
  const [theme, setTheme] = useState(styles);
  const [selectedTheme, setSelectedTheme] = useState<selectedThemeProps>(selectedThemeProps.DEFAULT);

  // TODO: When the below is extrapolated into a hook, consider Memoizing it
  // TODO: Remember to change variables to pull from _themes.scss
  useLayoutEffect(() => {
    if(selectedTheme !== selectedThemeProps.DEFAULT) {
      assignTheme(themeImports[selectedTheme], theme).then(setTheme);
    } else {
      setTheme(styles);
      }
  },[selectedTheme]);

  // console.log('theme',theme);
  // console.log('styles',styles);

  return (
    <>
      <Link href={href}>
        <a
          target={newWindow ? "_blank" : ""}
          rel={newWindow ? "noopener noreferrer" : ""}
        >
          <button 
            className={`${theme[`button--${disabled?'disabled':type}`]}`}
            // onClick={action}
            onClick={() => setSelectedTheme(selectedTheme === selectedThemeProps.DEFAULT?selectedThemeProps.DARK:selectedThemeProps.DEFAULT)}
            type='submit'
            disabled={disabled}
            >
            {children}
          </button>
        </a>
      </Link>
    </>
  )
}