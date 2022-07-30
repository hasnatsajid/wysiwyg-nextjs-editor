const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="line">
        <div className="box">
          <span className="editor-btn icon smaller" data-action="bold" data-tag-name="b" title="Bold">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/bold.png" />
          </span>
          <span className="editor-btn icon smaller" data-action="italic" data-tag-name="i" title="Italic">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/italic.png" />
          </span>
          <span className="editor-btn icon smaller" data-action="underline" data-tag-name="u" title="Underline">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/underline.png" />
          </span>
          <span className="editor-btn icon smaller" data-action="strikeThrough" data-tag-name="strike" title="Strike through">
            <img src="https://img.icons8.com/fluency-systems-filled/30/000000/strikethrough.png" />
          </span>
        </div>

        <div className="box">
          <span className="editor-btn icon has-submenu">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/align-left.png" />
            <div className="submenu">
              <span className="editor-btn icon" data-action="justifyLeft" data-style="textAlign:left" title="Justify left">
                <img src="https://img.icons8.com/fluency-systems-filled/48/000000/align-left.png" />
              </span>
              <span className="editor-btn icon" data-action="justifyCenter" data-style="textAlign:center" title="Justify center">
                <img src="https://img.icons8.com/fluency-systems-filled/48/000000/align-center.png" />
              </span>
              <span className="editor-btn icon" data-action="justifyRight" data-style="textAlign:right" title="Justify right">
                <img src="https://img.icons8.com/fluency-systems-filled/48/000000/align-right.png" />
              </span>
              <span className="editor-btn icon" data-action="formatBlock" data-style="textAlign:justify" title="Justify block">
                <img src="https://img.icons8.com/fluency-systems-filled/48/000000/align-justify.png" />
              </span>
            </div>
          </span>
          <span className="editor-btn icon" data-action="insertOrderedList" data-tag-name="ol" title="Insert ordered list">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/numbered-list.png" />
          </span>
          <span className="editor-btn icon" data-action="insertUnorderedList" data-tag-name="ul" title="Insert unordered list">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/bulleted-list.png" />
          </span>
          <span className="editor-btn icon" data-action="outdent" title="Outdent" data-required-tag="li">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/outdent.png" />
          </span>
          <span className="editor-btn icon" data-action="indent" title="Indent">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/indent.png" />
          </span>
        </div>
        <div className="box">
          <span className="editor-btn icon" data-action="insertHorizontalRule" title="Insert horizontal rule">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/horizontal-line.png" />
          </span>
        </div>
        <div className="box">
          <span className="editor-btn icon smaller" data-action="undo" title="Undo">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/undo--v1.png" />
          </span>
          <span className="editor-btn icon" data-action="removeFormat" title="Remove format">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/remove-format.png" />
          </span>
        </div>

        <div className="box">
          <span className="editor-btn icon smaller" data-action="createLink" title="Insert Link">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/add-link.png" />
          </span>
          <span className="editor-btn icon smaller" data-action="unlink" data-tag-name="a" title="Unlink">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/delete-link.png" />
          </span>
        </div>

        <div className="box">
          <span className="editor-btn icon" data-action="toggle-view" title="Show HTML-Code">
            <img src="https://img.icons8.com/fluency-systems-filled/48/000000/source-code.png" />
          </span>
        </div>
      </div>
      <div className="line">
        {/* <div className="box">
        <span className="editor-btn icon smaller" data-action="undo" title="Undo">
          <img src="https://img.icons8.com/fluency-systems-filled/48/000000/undo--v1.png" />
        </span>
        <span className="editor-btn icon" data-action="removeFormat" title="Remove format">
          <img src="https://img.icons8.com/fluency-systems-filled/48/000000/remove-format.png" />
        </span>
      </div>

      <div className="box">
        <span className="editor-btn icon smaller" data-action="createLink" title="Insert Link">
          <img src="https://img.icons8.com/fluency-systems-filled/48/000000/add-link.png" />
        </span>
        <span className="editor-btn icon smaller" data-action="unlink" data-tag-name="a" title="Unlink">
          <img src="https://img.icons8.com/fluency-systems-filled/48/000000/delete-link.png" />
        </span>
      </div>

      <div className="box">
        <span className="editor-btn icon" data-action="toggle-view" title="Show HTML-Code">
          <img src="https://img.icons8.com/fluency-systems-filled/48/000000/source-code.png" />
        </span>
      </div> */}
      </div>
    </div>
  );
};

export default Toolbar;
