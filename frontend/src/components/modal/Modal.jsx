import React, { Children, useState } from 'react';
import { Button, Modal } from 'antd';
const App = ({ title, children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                {title}
            </Button>
            <Modal title="Edit Blog" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    );
};
export default App;