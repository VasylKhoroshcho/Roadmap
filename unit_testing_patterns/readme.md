# AAA patern (Arrange, Act, and Assert)
- The <strong>Arrange</strong> part includes all the setup code and test data you need to simulate a test scenario.
- The <strong>Act</strong>  part executes the unit test
- The <strong>Assert</strong> part groups all assertions where you compare the received output with the expected output.

# Detailed test descriptions using the 3-layer system
- Layer 1: Unit that you want to test, or test requirement
- Layer 2: Specific action or scenario you want to test
- Layer 3: Describe the expected result

# Avoid testing private methods

# Avoid catching errors in tests use `toThrow` or similar instead

# Don’t mock everything

# Use realistic data

# Avoid too many assertions per test case
