import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailsPage = () => {
    const { serviceId } = useParams();

    // Updated mock data to include imageUrl
    const services = [
        { id: '1', name: 'Website Development', description: '...', imageUrl: 'https://th.bing.com/th?id=OIP.qyHgF2j7tmHsEF3u3qL_KwHaDJ&w=350&h=148&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { id: '2', name: 'Mobile App Development', description: '...', imageUrl: 'https://th.bing.com/th?id=OIP.O4b29g448P1Js7pElwG6-AHaFC&w=303&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { id: '3', name: 'SEO Services', description: '...Hello Ghana', imageUrl: 'https://th.bing.com/th?id=OIP.uryG9iC8lWBkH5ZjoDqVzgAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
        { id: '4', name: 'Digital Marketing', description: '...', imageUrl: 'https://th.bing.com/th?id=OIP.aMgjNHPA1MMfC_ryGHmofAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
    ];

    const serviceDetails = services.find(service => service.id === serviceId);

    // Check if serviceDetails is not undefined before rendering
    if (!serviceDetails) {
        return <div>Service not found</div>;
    }

    return (
        <div>
            <h1>{serviceDetails.name}</h1>
            <img src={serviceDetails.imageUrl} alt={serviceDetails.name} />
            <p>{serviceDetails.description}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ServiceDetailsPage;
