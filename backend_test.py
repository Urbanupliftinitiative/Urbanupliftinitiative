#!/usr/bin/env python3

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend .env
BACKEND_URL = "https://celebrate-journey.preview.emergentagent.com/api"

def test_root_endpoint():
    """Test the root API endpoint"""
    try:
        print("Testing GET /api/ ...")
        response = requests.get(f"{BACKEND_URL}/")
        
        if response.status_code == 200:
            data = response.json()
            expected_message = "Hello World"
            if data.get("message") == expected_message:
                print("✅ Root endpoint working correctly")
                return True
            else:
                print(f"❌ Root endpoint returned unexpected message: {data}")
                return False
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Root endpoint test failed with error: {str(e)}")
        return False

def test_get_status_checks():
    """Test GET /api/status endpoint"""
    try:
        print("Testing GET /api/status ...")
        response = requests.get(f"{BACKEND_URL}/status")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ GET status endpoint working - returned {len(data)} status checks")
                return True
            else:
                print(f"❌ GET status endpoint returned non-list data: {data}")
                return False
        else:
            print(f"❌ GET status endpoint failed with status {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ GET status endpoint test failed with error: {str(e)}")
        return False

def test_post_status_check():
    """Test POST /api/status endpoint"""
    try:
        print("Testing POST /api/status ...")
        
        test_data = {
            "client_name": "TestClient_MobileResponsiveCheck"
        }
        
        response = requests.post(
            f"{BACKEND_URL}/status",
            json=test_data,
            headers={"Content-Type": "application/json"}
        )
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "client_name", "timestamp"]
            
            if all(field in data for field in required_fields):
                if data["client_name"] == test_data["client_name"]:
                    print("✅ POST status endpoint working correctly")
                    return True
                else:
                    print(f"❌ POST status endpoint returned incorrect client_name: {data}")
                    return False
            else:
                print(f"❌ POST status endpoint missing required fields: {data}")
                return False
        else:
            print(f"❌ POST status endpoint failed with status {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ POST status endpoint test failed with error: {str(e)}")
        return False

def test_backend_apis():
    """Run all backend API tests"""
    print(f"Starting backend API tests for: {BACKEND_URL}")
    print("=" * 60)
    
    tests = [
        ("Root Endpoint", test_root_endpoint),
        ("GET Status Checks", test_get_status_checks),
        ("POST Status Check", test_post_status_check)
    ]
    
    results = []
    for test_name, test_func in tests:
        print(f"\n{test_name}:")
        success = test_func()
        results.append((test_name, success))
    
    print("\n" + "=" * 60)
    print("BACKEND TEST RESULTS SUMMARY:")
    print("=" * 60)
    
    all_passed = True
    for test_name, success in results:
        status = "✅ PASSED" if success else "❌ FAILED"
        print(f"{test_name}: {status}")
        if not success:
            all_passed = False
    
    print("=" * 60)
    if all_passed:
        print("🎉 ALL BACKEND TESTS PASSED")
        return True
    else:
        print("⚠️  SOME BACKEND TESTS FAILED")
        return False

if __name__ == "__main__":
    success = test_backend_apis()
    sys.exit(0 if success else 1)