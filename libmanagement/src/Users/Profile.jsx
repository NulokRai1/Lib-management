import React, { useState } from 'react';
import { Form, Button, Modal, Image } from 'react-bootstrap';

function UserProfile() {
  // State for user data and modal visibility
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    profileImage: '/path/to/default/profile-image.jpg', // Placeholder image path
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Handling form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handling image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData((prevData) => ({
        ...prevData,
        profileImage: imageUrl,
      }));
    }
  };

  // Toggle between edit and view mode
  const toggleEditMode = () => {
    setIsEditing((prevState) => !prevState);
  };

  // Save the updated user data (you could make an API call here)
  const saveProfile = () => {
    console.log('Profile saved:', userData);
    setModalVisible(false);
    setIsEditing(false);
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>

      <div className="row">
        <div className="col-md-4">
          {/* Display Profile Image */}
          <div className="text-center">
            <Image
              src={userData.profileImage}
              roundedCircle
              alt="Profile"
              style={{ width: '150px', height: '150px' }}
            />
            <div className="mt-3">
              {isEditing ? (
                <Form.Group>
                  <Form.Label>Upload New Profile Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Form.Group>
              ) : (
                <Button onClick={toggleEditMode} variant="secondary">
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-8">
          {/* User Info */}
          <div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={userData.name}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userData.email}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={userData.phone}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {isEditing && (
                <Button variant="primary" onClick={saveProfile}>
                  Save Changes
                </Button>
              )}
            </Form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal show={isModalVisible} onHide={() => setModalVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Save Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to save the changes to your profile?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalVisible(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={saveProfile}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserProfile;
