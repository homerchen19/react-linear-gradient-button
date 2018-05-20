import R from 'ramda';

const DOMProps = [
  'abbr',
  'accept',
  'acceptCharset',
  'accessKey',
  'action',
  'allowFullScreen',
  'allowTransparency',
  'alt',
  'async',
  'autoComplete',
  'autoFocus',
  'autoPlay',
  'cellPadding',
  'cellSpacing',
  'challenge',
  'charset',
  'checked',
  'cite',
  'class',
  'className',
  'cols',
  'colSpan',
  'command',
  'content',
  'contentEditable',
  'contextMenu',
  'controls',
  'coords',
  'crossOrigin',
  'data',
  'dateTime',
  'default',
  'defer',
  'dir',
  'disabled',
  'download',
  'draggable',
  'dropzone',
  'encType',
  'for',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'frameBorder',
  'headers',
  'height',
  'hidden',
  'high',
  'href',
  'hrefLang',
  'htmlFor',
  'httpEquiv',
  'icon',
  'id',
  'inputMode',
  'isMap',
  'itemId',
  'itemProp',
  'itemRef',
  'itemScope',
  'itemType',
  'kind',
  'label',
  'lang',
  'list',
  'loop',
  'manifest',
  'max',
  'maxLength',
  'media',
  'mediaGroup',
  'method',
  'min',
  'minLength',
  'multiple',
  'muted',
  'name',
  'noValidate',
  'open',
  'optimum',
  'pattern',
  'ping',
  'placeholder',
  'poster',
  'preload',
  'radioGroup',
  'readOnly',
  'rel',
  'required',
  'role',
  'rows',
  'rowSpan',
  'sandbox',
  'scope',
  'scoped',
  'scrolling',
  'seamless',
  'selected',
  'shape',
  'size',
  'sizes',
  'sortable',
  'span',
  'spellCheck',
  'src',
  'srcDoc',
  'srcSet',
  'start',
  'step',
  'style',
  'tabIndex',
  'target',
  'title',
  'translate',
  'type',
  'typeMustMatch',
  'useMap',
  'value',
  'width',
  'wmode',
  'wrap',
  'onCopy',
  'onCut',
  'onPaste',
  'onLoad',
  'onError',
  'onWheel',
  'onScroll',
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
  'onKeyDown',
  'onKeyPress',
  'onKeyUp',
  'onFocus',
  'onBlur',
  'onChange',
  'onInput',
  'onSubmit',
  'onClick',
  'onContextMenu',
  'onDoubleClick',
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onSelect',
  'onTouchCancel',
  'onTouchEnd',
  'onTouchMove',
  'onTouchStart',
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
  'onTransitionEnd',
];

const arrayToObject = array =>
  R.reduce(
    (result, prop) => {
      // eslint-disable-next-line no-param-reassign
      result[prop] = prop;

      return result;
    },
    {},
    array
  );

const DOMPropsObj = arrayToObject(DOMProps);

export default function filterProps({
  props,
  allowedProps = {},
  options: { withDOMProps = false, mapProps = null },
}) {
  const originalProps = R.clone(props);
  const finalProps = {};

  if (R.type(allowedProps) === 'Array') {
    // eslint-disable-next-line no-param-reassign
    allowedProps = arrayToObject(allowedProps);
  }

  if (mapProps && R.type(mapProps) === 'Object') {
    R.forEachObjIndexed((fn, key) => {
      if (R.type(fn) === 'Function') {
        const { key: newKey, value: newValue } = fn({
          key,
          value: originalProps[key],
        });

        originalProps[newKey] = newValue;

        if (key !== newKey) {
          delete originalProps[key];
        }
      }
    }, mapProps);
  }

  R.forEachObjIndexed((value, key) => {
    if (withDOMProps && DOMPropsObj[key]) {
      finalProps[key] = value;
    } else if (allowedProps[key]) {
      if (R.type(allowedProps[key]) === 'Function') {
        finalProps[key] = allowedProps[key];
      } else {
        finalProps[key] = value;
      }
    }
  }, originalProps);

  return finalProps;
}
