
var assert = chai.assert;

suite('temperature', function() {
  
    test('14 Fahrenheit = -10 Celsius', function() {
        original.value = "14F";
        calculate();
        assert.deepEqual(converted.innerHTML, "-10 Celsius");
    });
    
    test('-14.9 Celsius = 5.18 Fahrenheit', function() {
        original.value = "-14.9   c";
        calculate();
        assert.deepEqual(converted.innerHTML, "5.18 Fahrenheit");
    });
    
    test('12e-2 Celsius (0.12 Celsius) = 32.216 Fahrenheit', function() {
        original.value = "12e-2 C";
        calculate();
        assert.deepEqual(converted.innerHTML, "32.216 Fahrenheit");
    });
    
    test('3.2e0 Fahrenheit (3.2 Fahrenheit) = -16 Celsius', function() {
        original.value = "-> 3.2e0f";
        calculate();
        assert.deepEqual(converted.innerHTML, "-16 Celsius");
    });
    
    test('pinguino => error', function() {
        original.value = "pinguino";
        calculate();
        assert.match(converted.innerHTML, /Error/);
    });
    
});