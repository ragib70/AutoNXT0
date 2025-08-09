/**
 * Quick test script for the registration API
 * Run with: node test-api.js (when server is running)
 */

const testRegistration = async () => {
  const testData = {
    name: "John Doe",
    email: "john.doe@example.com", 
    phone: "+91 9876543210", // Use your actual number for testing
    visitorType: "General Visitor"
  };

  try {
    console.log('Testing registration API...');
    console.log('Data:', testData);
    
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Registration successful!');
      console.log('Booking ID:', result.bookingId);
      console.log('Message Type:', result.messageType);
      console.log('Phone:', result.data.phone);
    } else {
      console.error('❌ Registration failed:', result.error);
    }
    
  } catch (error) {
    console.error('❌ API Test failed:', error.message);
    console.log('Make sure your development server is running: npm run dev');
  }
};

// Run the test
testRegistration();
