// import { Component } from "react";
// import ReactQuill, { Quill } from "react-quill";
// import 'react-quill/dist/quill.snow.css';

// import ImageUploader from "quill-image-uploader";

// Quill.register("modules/imageUploader", ImageUploader);

// class Editor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//     };
//   }

//   modules = {
//     toolbar: [
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
//       ["link", "image"],
//     ],
//     imageUploader: {
//       upload: (file) => {
//         return new Promise((resolve, reject) => {
//           const formData = new FormData();
//           formData.append("file", file);

//           fetch(
//             "https://row-dfo.azurewebsites.net/api/file/uploadFileContent",
//             {
//               method: "POST",
//               headers: { 
//                 "Authorization": "Bearer CEu12X3R1jx9I6RiMjxiu0EjvmMOs_P1Hk6VuUcWBGFR_PB_AsUqNqvrzV0vp9Gphxp8SZ3R_VYc-QqPjf2rldTXLw1rT7z3IF-dEYq-s3FY_rHpN7vkLIT3xIExum68MvTu1LRL5HB70c7sKfhOt24srRKItIuDla8qAuxtZyi8_hCal4-G_7wL2Nuv65JofQN21naXtucnm9fDBFk5MnXLrR9z7ouX2ToaJe91qIA3ceXNwqzlUEpwBZStNjhBXkFxqJlEGpcFAqpZsiwLxX8XocTpXVDkdbD0PUPGoSLhQ-kgKXQiS8CacfLfEjNzEJim1cyY4rq_sVCHaQcHwYWfuk1QUsztSUIF9EM4VjzteOeX_HZ-N8HXLcV_gLIflsjUdqgM39Cr78bQZPATSX_DzsUu7kGqQCoFLf_wwchnhZBlTGMjFGuWr0zndO5vC8-r-OBaw2TMsKxS-45ml3BN0N3IY4PQtdiiFjIAIC2r2jvP_7BxK5p8v8G-VWqj"
//               },
//               body: formData,
//             }
//           )
//             .then((response) => response.json())
//             .then((result) => {
//               let url = 'https://row-dfo.azurewebsites.net/api/' + result.url
//               resolve(url);
//             })
//             .catch((error) => {
//               reject("Upload failed");
//               console.error("Error:", error);
//             });
//         });
//       },
//     },
//   };

//   formats = [
//     'header',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'align', 'list', 'bullet', 'indent', 
//     'link', 'image',
//   ];

//   render() {
//     return (
//       <ReactQuill
//         theme="snow"
//         modules={this.modules}
//         formats={this.formats}
//         value={this.state.text}
//       />
//     );
//   }
// }

// export default Editor;

import { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";

import 'react-quill/dist/quill.snow.css';

Quill.register("modules/imageUploader", ImageUploader);

const Editor = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      ["link", "image"],
    ],
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("file", file);

          fetch(
            "https://row-dfo.azurewebsites.net/api/file/uploadFileContent",
            {
              method: "POST",
              headers: { 
                "Authorization": "Bearer CEu12X3R1jx9I6RiMjxiu0EjvmMOs_P1Hk6VuUcWBGFR_PB_AsUqNqvrzV0vp9Gphxp8SZ3R_VYc-QqPjf2rldTXLw1rT7z3IF-dEYq-s3FY_rHpN7vkLIT3xIExum68MvTu1LRL5HB70c7sKfhOt24srRKItIuDla8qAuxtZyi8_hCal4-G_7wL2Nuv65JofQN21naXtucnm9fDBFk5MnXLrR9z7ouX2ToaJe91qIA3ceXNwqzlUEpwBZStNjhBXkFxqJlEGpcFAqpZsiwLxX8XocTpXVDkdbD0PUPGoSLhQ-kgKXQiS8CacfLfEjNzEJim1cyY4rq_sVCHaQcHwYWfuk1QUsztSUIF9EM4VjzteOeX_HZ-N8HXLcV_gLIflsjUdqgM39Cr78bQZPATSX_DzsUu7kGqQCoFLf_wwchnhZBlTGMjFGuWr0zndO5vC8-r-OBaw2TMsKxS-45ml3BN0N3IY4PQtdiiFjIAIC2r2jvP_7BxK5p8v8G-VWqj"
              },
              body: formData,
            }
          )
            .then((response) => response.json())
            .then((result) => {
              let url = 'https://row-dfo.azurewebsites.net/api/' + result.url
              resolve(url);
            })
            .catch((error) => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      },
    },
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'align', 'list', 'bullet', 'indent', 
    'link', 'image',
  ];

    return (
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
      />
    );
}

export default Editor