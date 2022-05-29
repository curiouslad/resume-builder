import { useCallback, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate, ReactEditor, RenderLeafProps, RenderElementProps } from 'slate-react'
import {
    Editor,
    Transforms,
    createEditor,
    Descendant,
    Element as SlateElement,
    BaseEditor,
    Node,
} from 'slate'
import { HistoryEditor, withHistory } from 'slate-history'
import { Box, Typography } from '@mui/material'
import { RichTextBoxControls } from './RichTextBoxControls'

type CustomElement = { type: string; children: CustomText[], align?: string | undefined }
type CustomText = { text: string; bold?: boolean; italic?: boolean; underline?: boolean };

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor
        Element: CustomElement
        Text: CustomText
    }
}
type HOTKEYSTYPE = {
    [key: string]: string
}
const HOTKEYS: HOTKEYSTYPE = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    // 'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['start', 'center', 'end', 'justify']

interface RichTextBoxProps {
    onChange: (value: Descendant[]) => void;
    placeholder?: string;
    value: Descendant[];
};
export const RichTextBox = ({ onChange, placeholder, value }: RichTextBoxProps) => {
    const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
    const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
    const editor = useMemo(() => withHistory(withReact(createEditor() as ReactEditor)), []);

    if (!value.length) {
        value = initialValue
        // onChange(value);
    }
    return (
        <Slate editor={editor} value={value} onChange={onChange}>
            <Box sx={{
                border: 1,
                borderRadius: theme => `${theme.shape.borderRadius}px`,
                borderColor: theme => theme.palette.grey[400],
                maxWidth: '100%',
                '&:hover': {
                    borderColor: theme => theme.palette.text.primary,
                },
                '&:focus-within': {
                    border: 2,
                    borderColor: theme => theme.palette.primary.main,
                }
            }}>
                <RichTextBoxControls
                    toggleMark={toggleMark}
                    toggleBlock={toggleBlock}
                    isMarkActive={isMarkActive}
                    isBlockActive={isBlockActive}
                />
                <Box sx={{
                    padding: `8.5px 14px 16.5px 14px`
                }}>
                    <Editable
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        placeholder={placeholder || ""}
                        spellCheck
                        autoFocus
                        onKeyDown={event => {
                            for (const hotkey in HOTKEYS) {
                                if (isHotkey(hotkey, event)) {
                                    event.preventDefault()
                                    const mark = HOTKEYS[hotkey];
                                    toggleMark(editor, mark)
                                }
                            }
                        }}
                    />
                </Box>
            </Box>

        </Slate>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toggleBlock = (editor: any, format: string) => {
    const isActive = isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
    );

    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: n =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n.type) &&
            !TEXT_ALIGN_TYPES.includes(format),
        split: true,
    })
    let newProperties: Partial<CustomElement>
    if (TEXT_ALIGN_TYPES.includes(format)) {
        newProperties = {
            align: isActive ? undefined : format,
        }
    } else {
        newProperties = {
            type: isActive ? 'paragraph' : isList ? 'list-item' : format,
        }
    }
    Transforms.setNodes<SlateElement>(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toggleMark = (editor: any, format: string) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isBlockActive = (editor: any, format: string, blockType = 'type') => {
    const { selection } = editor
    if (!selection) return false

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: (n: Node) =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (n as any)[blockType] === format,
        })
    )

    return !!match
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isMarkActive = (editor: any, format: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const marks = Editor.marks(editor) as any;
    return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }: RenderElementProps) => {
    // const style = { textAlign: element.align }
    switch (element.type) {
        // case 'block-quote':
        //     return (
        //         <blockquote style={style} {...attributes}>
        //             {children}
        //         </blockquote>
        //     )
        case 'bulleted-list':
            return (
                <ul
                    style={{
                        textAlign: element.align as CanvasTextAlign
                    }}
                    {...attributes}
                >
                    {children}
                </ul>
            )
        // case 'heading-one':
        //     return (
        //         <h1 style={style} {...attributes}>
        //             {children}
        //         </h1>
        //     )
        // case 'heading-two':
        //     return (
        //         <h2 style={style} {...attributes}>
        //             {children}
        //         </h2>
        //     )
        case 'list-item':
            return (
                <li
                    style={{
                        textAlign: element.align as CanvasTextAlign
                    }}
                    {...attributes}
                >
                    {children}
                </li>
            )
        case 'numbered-list':
            return (
                <ol
                    style={{
                        textAlign: element.align as CanvasTextAlign
                    }}
                    {...attributes}
                >
                    {children}
                </ol>
            )
        default:

            return (
                <Typography
                    sx={{
                        textAlign: element.align!,
                        wordWrap: "break-word"
                    }}
                    {...attributes}
                >
                    {children}
                </Typography>
            )
    }
}

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    // if (leaf.code) {
    //     children = <code>{children}</code>
    // }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [
            { text: '' },
        ]
    }
]
