import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

// Define the component and accept product details as props
function ProductCard({ product }) {
  // Destructure the product object for cleaner code
  const { name, price, imageUrl, description, isSale, stock } = product;
  
  // Conditional rendering for the "Out of Stock" status
  const isOutOfStock = stock <= 0;

  return (
    // Card component is the main container for the product
    <Card className="h-100 shadow-sm border-0">
      
      {/* Product Image */}
      <Card.Img 
        variant="top" 
        src={imageUrl || 'https://via.placeholder.com/286x180?text=Product+Image'} 
        alt={name} 
        style={{ objectFit: 'cover', maxHeight: '180px' }} 
      />
      
      {/* Card Content Area */}
      <Card.Body className="d-flex flex-column">
        {/* Title and Price */}
        <Card.Title className="text-truncate" title={name}>{name}</Card.Title>
        
        <Card.Text className="mb-2">
          {/* Display Sale Badge if applicable */}
          {isSale && <Badge bg="danger" className="me-2">Sale</Badge>}
          
          {/* Display Stock Status */}
          {isOutOfStock ? (
            <Badge bg="secondary">Out of Stock</Badge>
          ) : (
            <Badge bg="success">In Stock</Badge>
          )}
          
          <div className="fs-5 fw-bold mt-2">
            ${price.toFixed(2)}
          </div>
        </Card.Text>

        {/* Short description text */}
        <Card.Text className="text-muted small flex-grow-1">
            {description.substring(0, 50)}...
        </Card.Text>

        {/* Action Button - Disabled if out of stock */}
        <Button 
          variant="primary" 
          onClick={() => alert(`Viewing details for: ${name}`)}
          disabled={isOutOfStock}
          className="mt-auto" // Pushes the button to the bottom of the card
        >
          {isOutOfStock ? 'View Details' : 'Add to Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;