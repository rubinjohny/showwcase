import React, {useState,useEffect} from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import {checkDescriptionEmpty} from '../Utils/Utils'

const MyEditor = ({setDesc}) => {

   const [editor, setEditor] = useState(EditorState.createEmpty());
   const [content, setContentState] = useState("");

   useEffect(()=>{
      let markup = draftToHtml(
         convertToRaw(editor.getCurrentContent()),
         {}
      );
      setDesc(checkDescriptionEmpty(markup) ? "":markup)
   },[content])

   return (
      <Editor
         initialEditorState={editor}
         onEditorStateChange={editorState => setEditor(editorState)}
         onContentStateChange={contentState => setContentState(contentState)}
         toolbar={{ options: ['inline','list'],}}
         wrapperStyle={{ border: "1px lightgrey solid"}}
         editorStyle={{ paddingLeft: 10, paddingRight: 10, margin: 0, minHeight: 100, maxHeight:200}}
         toolbarStyle={{ margin:0}}
      />
   )
}

export default MyEditor as Editor;