import React, { useState } from 'react';
import axios from 'axios';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [abstract, setAbstract] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('author', author);
      formData.append('publish_date', publishDate);
      formData.append('abstract', abstract);
      formData.append('department_id', departmentId);
      formData.append('category_id', categoryId);
      formData.append('file', file);

      const response = await axios.post('http://localhost:9000/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.status === 'Success') {
        Swal.fire({
          title: 'Success!',
          text: 'Submitted',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        setTitle('');
        setAuthor('');
        setPublishDate('');
        setAbstract('');
        setDepartmentId('');
        setCategoryId('');
        setFile(null);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Upload failed: ' + response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred: ' + error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error('Error creating research:', error);
    }
  };

  return (
    <section id="upload" className="block categories-block">
      <Container fluid className="upload-container">
        <div className="title-bar">
          <h1 className="title1">Upload</h1>
        </div>
      </Container>

      <Container className="up-container">
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="exampleForm.ControlInput"
            label="Research Title"
            className="mb-2"
          >
            <Form.Control
              type="text"
              name="title"
              placeholder="Title of the Research Paper"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingName"
            label="Author Name"
            className="mb-2"
          >
            <Form.Control
              type="text"
              name="author"
              placeholder="John Doe"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              style={{ height: '40px' }} // Adjust the height here
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingDate"
            label="Published Date"
            className="mb-2"
          >
            <Form.Control
              type="date"
              name="publishDate"
              placeholder="yyyy-mm-dd"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Abstract of the Paper"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              rows={3}
              name="abstract"
              placeholder="A brief overview of the research paper."
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingDepartment"
            label="Department"
            className="mb-2"
          >
            <Form.Control
              type="text"
              name="departmentId"
              placeholder="Department ID"
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              required
              style={{ height: '40px' }} // Adjust the height here
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingCategory"
            label="Category ID"
            className="mb-2"
          >
            <Form.Control
              type="text"
              name="categoryId"
              placeholder="Category ID"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            />
          </FloatingLabel>

          <FloatingLabel controlId="file" label="Please select a PDF file." className="mb-2">
            <Form.Control type="file" name="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} required />
          </FloatingLabel>

          <Button type="submit" className="btn btn-primary">Upload</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Upload;
