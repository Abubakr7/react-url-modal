import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";

const Video = Quill.import("formats/video");
const Link = Quill.import("formats/link");

class CoustomVideo extends Video {
  static create(value) {
    const node = super.create(value);

    const video = document.createElement("video");
    video.setAttribute("controls", true);
    video.setAttribute("type", "video/mp4");
    video.setAttribute("style", "height: 200px; width: 100%");
    video.setAttribute("src", this.sanitize(value));
    node.appendChild(video);

    return node;
  }

  static sanitize(url) {
    return Link.sanitize(url);
  }
}
CoustomVideo.blotName = "video";
CoustomVideo.className = "ql-video";
CoustomVideo.tagName = "DIV";

Quill.register("formats/video", CoustomVideo);

export class EditorBox extends Component {
  /** some code **/
  modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, false] }],

        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link", "image", "video"],
        ["clean"],
      ],
      handlers: {
        image: () => {
          this.showImageUploadModal();
        },
        video: () => {
          this.showVideoUploadModal();
        },
        // insertImage: this.insertImage,
      },
    },
  };

  formats = [
    "background",
    "bold",
    "color",
    "font",
    "code",
    "italic",
    "link",
    "size",
    "strike",
    "script",
    "underline",
    "blockquote",
    "header",
    "indent",
    "list",
    "align",
    "direction",
    "code-block",
    "image",
    "video",
  ];

  /** some code **/
  handleOk = () => {
    const { mediaURL, imageUploadBox, videoUploadBox } = this.state;
    if (!mediaURL) return;

    if (imageUploadBox) {
      this.insertImage(mediaURL, "image");
    }
    if (videoUploadBox) {
      this.insertImage(mediaURL, "video");
    }

    this.handleUploadBoxCancel();
  };

  insertImage = (url, type) => {
    const range = this.quill.getSelection(true);

    this.quill.insertEmbed(range.index, type, url, "user");
    this.quill.setSelection(range.index + 1);

    this.quillRef.focus();
  };

  handleUploadBoxCancel = () => {
    this.setState({
      videoUploadBox: false,
      imageUploadBox: false,
      mediaURL: null,
    });
  };

  render() {
    /**  some code **/
    return (
      <div>
        <UploadBox
          visiable={videoUploadBox || imageUploadBox}
          onConfirm={this.handleOk}
        />
        <ReactQuill
          modules={this.modules}
          theme="snow"
          value={text}
          onChange={this.handleChange}
          placeholder="请输入..."
          className={styles.editor}
          formats={this.formats}
          ref={(el) => {
            if (el) this.quillRef = el;
          }}
        />
      </div>
    );
  }
}
