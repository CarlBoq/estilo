import React, { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Animated, FlatList, Pressable, ScrollView, Dimensions, SafeAreaView, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import MasonryList from '@react-native-seoul/masonry-list';


//Log in
function Login({navigation})  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={styles.container}>

      <View style={styles.textWrapper}>
      <Text style={styles.loginText}>Welcome back! Glad to See You Again!</Text>
      </View>

          <TextInput
            style={styles.emailInput}
            placeholder="Email"
            placeholderTextColor="#ffffffaa"
            keyboardType="email-address"
            maxLength={100}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            placeholderTextColor="#ffffff99"
            secureTextEntry={true}
          />

      <View style={styles.forgotContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Forgot')}> 
      <Text style={styles.forgotPassword}>Forgot Password?</Text> 
      </TouchableOpacity>
      </View>

      <View style={styles.nextButtonWrapper1}>
        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonLogin}> Login </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.forgotContainer}>
      <Text style={styles.accText}>Don't Have an Account?</Text>
      <View style={styles.forgotContainer}>
  <Text style={styles.accText}>Don't Have an Account?</Text>

  <TouchableOpacity onPress={() => navigation.navigate('Register')}>
    <Text style={styles.clickNow}>Register Now</Text>
  </TouchableOpacity>
</View>

      </View>

      <StatusBar style="auto" />

    </LinearGradient>
  );
}

// Register
function RegisterScreen({navigation})  {
   // State hooks for input fields
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   

     // --- Handlers ---

  // Handle registration logic
  const handleRegister = () => {
    console.log('Register pressed');
    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        Alert.alert('Error', 'Please enter a valid email address.');
        return;
    }
    if (password.length < 6) {
        Alert.alert('Error', 'Password must be at least 6 characters long.');
        return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // Placeholder for actual registration API call
    console.log('Registration Data:', { username, email, password });
    Alert.alert('Success (Placeholder)', 'Registration successful! Please login.');

    // Navigate back to Login screen after successful registration
    if (navigation) {
        navigation.navigate('Login'); // Ensure 'Login' matches your navigator screen name
    }
  };

  // Handle navigation back to Login screen
  const handleGoToLogin = () => {
    console.log('Login Now pressed');
    if (navigation) {
      // Navigate back to the Login screen
      navigation.navigate('Login'); // Or use navigation.goBack() if appropriate
    } else {
      console.log("Navigation prop missing.");
      Alert.alert('Error', 'Cannot navigate. Navigation prop is missing.');
    }
  };

  // --- Render Component ---
  return (
    <LinearGradient
      colors={['#FAD0C4', '#FFD1FF']} 
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="light" /> {/* Adjust status bar style for background */}

        <View style={styles.contentWrapper}>

            {/* Title Text */}
            <Text style={styles.title}>Hello! Register to get started</Text>

            {/* Input Fields */}
            <TextInput
                style={styles.input1}
                placeholder="Username"
                placeholderTextColor="#FFFFFFa0" // Semi-transparent white placeholder
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                textContentType="username" // Helps with autofill
            />
            <TextInput
                style={styles.input1}
                placeholder="Email"
                placeholderTextColor="#FFFFFFa0"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                textContentType="emailAddress" // Helps with autofill
            />
            <TextInput
                style={styles.input1}
                placeholder="Password"
                placeholderTextColor="#FFFFFFa0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry // Hide password input
                autoCapitalize="none"
                textContentType="newPassword" // Helps with autofill suggestions
            />
            <TextInput
                style={styles.input1}
                placeholder="Confirm password"
                placeholderTextColor="#FFFFFFa0"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry // Hide password input
                autoCapitalize="none"
                textContentType="newPassword" // Helps with autofill suggestions
            />

            {/* Register Button */}
            <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.loginLinkContainer}>
                <Text style={styles.loginLinkText}>Already have an account? </Text>
                <TouchableOpacity onPress={handleGoToLogin}>
                    <Text style={[styles.loginLinkText, styles.loginLinkActionText]}>
                        Login Now
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}



// Forgot Password
function Forgot({ navigation }) {
  const [email, setEmail] = useState('');
 
   return (
     <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={styles.forgotContainer2}>
 
       <Text style={styles.forgotTitle}>Forgot Password?</Text>
       <Text style={styles.forgotSubtitle}>
         Don’t worry! It occurs. Please enter the email address linked with your account.
       </Text>
 
       <TextInput
         style={styles.forgotInput}
         placeholder="Enter your email"
         placeholderTextColor="#fff"
         value={email}
         onChangeText={setEmail}
         keyboardType="email-address"
       />
 
       <TouchableOpacity style={styles.forgotSendButton}
        onPress={() => navigation.navigate('OTPVerification')}>
       <Text style={styles.forgotSendButtonText}>Send Code</Text>
       </TouchableOpacity> 
 
       <View style={styles.forgotBottomTextContainer}>
         <Text style={styles.forgotBottomText}>Remember Password? </Text>
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
           <Text style={styles.forgotLinkText}>Login Now</Text>
         </TouchableOpacity>
       </View>
 
     </LinearGradient>
   );
 }


 // OTP
function OTPVerification({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = text;
      setOtp(updatedOtp);
    }
  };

  return (
    <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={styles.OTPcontainer}>

      <Text style={styles.OTPtitle}>OTP Verification</Text>
      <Text style={styles.OTPsubtitle}>
        Enter the verification code we just sent on your email address.
      </Text>

      <View style={styles.OTPContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.OTPInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.OTPverifyButton}
        onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.OTPverifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <Text style={styles.OTPresendText}>
        Didn’t receive code?{' '}
        <Text style={styles.OTPresendLink}>Resend</Text>
      </Text>

    </LinearGradient>
  );
}


// Reset Password
function ResetPassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={styles.NPcontainer}>

      <Text style={styles.NPtitle}>Create new password</Text>
      <Text style={styles.NPsubtitle}>
        Your new password must be unique from those previously used.
      </Text>

      <TextInput
        style={styles.NPinput}
        placeholder="New Password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.NPinput}
        placeholder="Confirm Password"
        placeholderTextColor="#fff"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.NPbutton} 
        onPress={() => navigation.navigate('PasswordChanged')}>
        <Text style={styles.NPbuttonText}>Reset Password</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}


// PasswordChanged
function PasswordChanged({ navigation }) {

  return (
    <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={styles.CPcontainer}>

      <Image
        source={require('./assets/Check.png')} 
        style={styles.CPicon}
      />

      <Text style={styles.CPtitle}>Password Changed!</Text>
      <Text style={styles.CPsubtitle}>Your password has been changed successfully.</Text>

      <TouchableOpacity
        style={styles.CPbutton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.CPbuttonText}>Back to Login</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}


// Welcome Screen
function HomeScreen({ navigation }) {

  return (
    
    <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={styles.container}>

      <Image source={require("./assets/logo1.jpg")} style={styles.image} />

      <Text style={styles.welcomeText}> Welcome! </Text>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('NextScreen')}>
          <Text style={styles.buttonText}> &gt; </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />

    </LinearGradient>

  );
}


//Lets Find Screen
function NextScreen({navigation}) {

  return (

    <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={styles.container}>

     <Image source={require("./assets/logo3.png")} style={styles.image1} />

      <Text style={styles.welcomeText}>Let's Find your {'\n'}Desired Clothes!</Text>
      <Text style={styles.subText}>
        By clicking the continue button you will{'\n'}go to the next part of application
      </Text>

      <View style={styles.nextButtonWrapper}>
        <TouchableOpacity
          style={styles.nextButtonContainer}
          onPress={() => navigation.navigate('ThirdScreen')}>
          <Text style={styles.nextButtonText}> Continue </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />

    </LinearGradient>

  );
}


// Get Started Screen
function ThirdScreen({navigation}) {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [stylePreference, setStylePreference] = useState('');

  return (
    <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={styles.container}>
      

      <View style={styles.innerContainer}>

        <View style={styles.textGroup}>
          <Text style={styles.welcomeText1}>Let's Get Started!</Text>
          <Text style={styles.subText1}>
            Provide your personal details to enhance suggestions tailored to your preferences
          </Text>
        </View>


        <View style={styles.formGroup}>
          <Text style={styles.label}>Gender</Text>

          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>


          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Input Age"
            keyboardType="numeric"
            maxLength={3}
            value={age}
            onChangeText={setAge}
          />


          <Text style={[styles.label, { marginTop: 40 }]}>Style Preference</Text>

          <View style={[styles.dropdownContainer,  ]}>
            <Picker
              selectedValue={stylePreference}
              onValueChange={(itemValue) => setStylePreference(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Casual" value="casual" />
              <Picker.Item label="Elegant" value="elegant" />
              <Picker.Item label="Formal" value="formal" />
              <Picker.Item label="Minimalist" value="minimalist" />
              <Picker.Item label="StreetWear" value="streetWear" />
            </Picker>
          </View>
        </View>
        

        <View style={styles.nextButtonWrapper1}>
        <TouchableOpacity
          style={styles.nextButtonContainer}
          onPress={() => navigation.navigate('FourthScreen')}>
          <Text style={styles.nextButtonText}> Continue </Text>
        </TouchableOpacity>
      </View>


      </View>

      <StatusBar style="auto" />

    </LinearGradient>
  );
}


//Recommendation Screen
function FourthScreen({ navigation, savedOutfits, toggleSaveImage }) {
  const [expanded, setExpanded] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedAttire, setSelectedAttire] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState([]);
  const [selectedImageUris, setSelectedImageUris] = useState([]);

  const toggleExpand = () => {
    const toValue = expanded ? 0 : 1;
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const imageData = [
    { id: '1', uri: require('./assets/pic1.jpg'), tags: ['Streetwear', 'Casual'] },
    { id: '2', uri: require('./assets/pic2.jpg'), tags: ['Formal', 'Elegant'] },
    { id: '3', uri: require('./assets/pic3.jpg'), tags: ['Minimalist', 'Casual'] },
    { id: '4', uri: require('./assets/pic4.jpg'), tags: ['Streetwear', 'Casual'] },
    { id: '5', uri: require('./assets/pic5.jpg'), tags: ['Formal', 'Elegant'] },
    { id: '6', uri: require('./assets/pic6.jpg'), tags: ['Casual', 'Minimalist'] },
    { id: '7', uri: require('./assets/pic7.jpg'), tags: ['Streetwear', 'Casual'] },
    { id: '8', uri: require('./assets/pic8.jpg'), tags: ['Formal', 'Elegant'] },
    { id: '9', uri: require('./assets/pic9.jpg'), tags: ['Casual', 'Minimalist'] },
  ];

  const toggleSelection = (value, selectedValues, setSelectedValues) => {
    const isSelected = selectedValues.includes(value);
    const updatedValues = isSelected
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    setSelectedValues(updatedValues);

    if (!isSelected && imageMap[value]) {
      const newImages = imageMap[value].map((img) => ({
        uri: img,
        height: 200 + Math.floor(Math.random() * 100),
      }));
      setSelectedImageUris((prev) => [...prev, ...newImages]);
    } else if (isSelected) {
      setSelectedImageUris((prev) =>
        prev.filter((item) => !imageMap[value].includes(item.uri))
      );
    }
  };

  const imageMap = {
    XS: [
      require('./assets/XS.jpg'),
      require('./assets/XS1.jpg'),
      require('./assets/XS2.jpg'),
      require('./assets/XS3.jpg'),
     ],
     
     S: [
      require('./assets/S.jpg'),
      require('./assets/S1.jpg'),
      require('./assets/S2.jpg'),
      require('./assets/S3.jpg'),
     ],
     
     M: [
      require('./assets/M.jpg'),
      require('./assets/M1.jpg'),
      require('./assets/M2.jpg'),
      require('./assets/M3.jpg'),
     ],
     
     L: [
      require('./assets/L.jpg'),
      require('./assets/L1.jpg'),
      require('./assets/L2.jpg'),
      require('./assets/L3.jpg'),
     ],
   
     XL: [
      require('./assets/XL.jpg'),
      require('./assets/XL1.jpg'),
      require('./assets/XL2.jpg'),
      require('./assets/XL3.jpg'),
     ],
   
     XXL: [
      require('./assets/XXL.jpg'),
      require('./assets/XXL1.jpg'),
      require('./assets/XXL2.jpg'),
      require('./assets/XXL3.jpg'),
     ],
   
     Formal: [
      require('./assets/Formal.jpg'),
      require('./assets/Formal1.jpg'),
      require('./assets/Formal2.jpg'),
     ],
   
     Casual: [
      require('./assets/Casual.jpg'),
      require('./assets/Casual1.jpg'),
      require('./assets/Casual2.jpg'),
     ],
   
     Elegant: [
      require('./assets/Elegant.jpg'),
      require('./assets/Elegant1.jpg'),
      require('./assets/ELegant2.jpg'),
     ],
   
     Minimalist: [
      require('./assets/Minimalist.jpg'),
      require('./assets/Minimalist1.jpg'),
      require('./assets/Minimalist2.jpg'),
     ],
   
     StreetWear: [
      require('./assets/StreetWear.jpg'),
      require('./assets/StreetWear1.jpg'),
      require('./assets/StreetWear2.jpg'),
     ],
    
     Party: [
      require('./assets/Party.jpg'),
      require('./assets/Party1.jpg'),
      require('./assets/Party2.jpg'),
     ],
   
     Date: [
      require('./assets/Date.jpg'),
      require('./assets/Date1.jpg'),
      require('./assets/Date2.jpg'),
     ],
   
     Meeting: [
      require('./assets/Meeting.jpg'),
      require('./assets/Meeting1.jpg'),
      require('./assets/Meeting2.jpg'),
     ],
   
     Gathering: [
      require('./assets/Gathering.jpg'),
      require('./assets/Gathering1.jpg'),
      require('./assets/Gathering2.jpg'),
     ],
   
     Vacation: [
      require('./assets/Vacation.jpg'),
      require('./assets/Vacation1.jpg'),
      require('./assets/Vacation2.jpg'),
     ],
   
     Wedding: [
      require('./assets/Wedding.jpg'),
      require('./assets/Wedding1.jpg'),
      require('./assets/Wedding2.jpg'),
     ],
   
     Rainy: [
      require('./assets/Rainy.jpg'),
      require('./assets/Rainy1.jpg'),
      require('./assets/Rainy2.jpg'),
     ],
   
     Cloudy: [
      require('./assets/Cloudy.jpg'),
      require('./assets/Cloudy1.jpg'),
      require('./assets/Cloudy2.jpg'),
     ],
   
     Sunny: [
      require('./assets/Sunny.jpg'),
      require('./assets/Sunny1.jpg'),
      require('./assets/Sunny2.jpg'),
     ],
   
     Cold: [
      require('./assets/Cold.jpg'),
      require('./assets/Cold1.jpg'),
      require('./assets/Cold2.jpg'),
     ],
   
     Windy: [
      require('./assets/Windy.jpg'),
      require('./assets/Windy1.jpg'),
      require('./assets/Windy2.jpg'),
     ],
   
     Hot: [
      require('./assets/Hot.jpg'),
      require('./assets/Hot1.jpg'),
      require('./assets/Hot2.jpg'),
     ]   
  };

  return (
    <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={{ flex: 1 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>ESTILO</Text>

      {/* Tag Container */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 10 }}>
        {['Streetwear', 'Elegant', 'Casual', 'Formal', 'Minimalist'].map((tag) => (
          <Text
            key={tag}
            style={{
              backgroundColor: '#e0e0e0',
              paddingVertical: 5,
              paddingHorizontal: 15,
              margin: 5,
              borderRadius: 20,
            }}
          >
            {tag}
          </Text>
        ))}
      </View>

      {/* Image Grid */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 10 }}>
        {selectedImageUris.length > 0 ? (
          <MasonryList
            data={selectedImageUris.map((item, index) => ({ ...item, id: index.toString() }))}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ImageDetailScreen', {
                    imageUri: item.uri,
                    tags: [...selectedSizes, ...selectedAttire, ...selectedEvents, ...selectedWeather],
                  })
                }
              >
                <Image
                  source={item.uri}
                  style={{ width: '100%', height: item.height, borderRadius: 10, margin: 2 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <MasonryList
            data={imageData}
            keyExtractor={(item) => item.id}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ImageDetailScreen', {
                    imageUri: item.uri,
                    tags: item.tags,
                  })
                }
              >
                <Image
                  source={item.uri}
                  style={{ width: '100%', height: 250, borderRadius: 5, margin: 1 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>

      {/* Expanded Panel */}
      <Animated.View
        style={[
          {
            flex: 1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 50,
            paddingHorizontal: 20,
            paddingBottom: 20,
          },
          {
            top: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['100%', '0%'],
            }),
          },
        ]}
      >
    <TouchableOpacity style={styles.closeButton} onPress={toggleExpand}>
      <Icon name="menu" size={30} color="#000" />
    </TouchableOpacity>

    <Text style={styles.panelText}>Size</Text>

    <View style={styles.panelOptions}>
    
    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
  <Pressable
    key={size}
    onPress={() => toggleSelection(size, selectedSizes, setSelectedSizes)}
    style={[
      styles.optionButton,
      selectedSizes.includes(size) && styles.pressedButton,
    ]}
  >
    <Text style={[
      styles.optionText,
      selectedSizes.includes(size) && styles.pressedText,
    ]}>
      {size}
    </Text>
  </Pressable>
))}

</View>


<Text style={styles.panelText1}>Type of Attire</Text>

<View style={styles.panelOptions1}>

{['Formal', 'Casual', 'Elegant', 'Minimalist', 'StreetWear'].map((attire) => (
  <Pressable
    key={attire}
    onPress={() => toggleSelection(attire, selectedAttire, setSelectedAttire)}
    style={[
      styles.optionButton,
      selectedAttire.includes(attire) && styles.pressedButton,
    ]}
  >
    <Text style={[
      styles.optionText,
      selectedAttire.includes(attire) && styles.pressedText,
    ]}>
      {attire}
    </Text>
  </Pressable>
))}

</View>


<Text style={styles.panelText1}>Type of Event</Text>

<View style={styles.panelOptions2}>

{['Party', 'Date', 'Meeting', 'Gathering', 'Vacation', 'Wedding'].map((event) => (
  <Pressable
    key={event}
    onPress={() => toggleSelection(event, selectedEvents, setSelectedEvents)}
    style={[
      styles.optionButton,
      selectedEvents.includes(event) && styles.pressedButton,
    ]}
  >
    <Text style={[
      styles.optionText,
      selectedEvents.includes(event) && styles.pressedText,
    ]}>
      {event}
    </Text>
  </Pressable>
))}

</View>


<Text style={styles.panelText1}>Type of Weather</Text>

<View style={styles.panelOptions2}>

{['Rainy', 'Cloudy', 'Sunny', 'Cold', 'Windy', 'Hot'].map((weather) => (
  <Pressable
    key={weather}
    onPress={() => toggleSelection(weather, selectedWeather, setSelectedWeather)}
    style={[
      styles.optionButton,
      selectedWeather.includes(weather) && styles.pressedButton,
    ]}
  >
    <Text style={[
      styles.optionText,
      selectedWeather.includes(weather) && styles.pressedText,
    ]}>
      {weather}
    </Text>
  </Pressable>
))}

</View>


</Animated.View>




    {/* Other categories like Event and Weather can be added similarly */}


      {/* Bottom Navbar */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20, paddingTop: 20,}}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Icon name="search-outline" size={24} color="#735DEC" />
          <Text>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleExpand} style={{ alignItems: 'center' }}>
          <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('SavedOutfitsScreen')}>
          <Icon name="heart-outline" size={24} color="#735DEC" />
          <Text>Favorites</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
function SavedOutfitsScreen({ navigation, savedOutfits }) {
  return (
    <LinearGradient colors={['#FAD0C4', '#FFD1FF']} style={{ flex: 1 }}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 50,
          left: 20,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: '#fff',
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          zIndex: 1, // Ensure it's on top of other elements
        }}
      >
        <Icon name="arrow-back" size={24} color="#735DEC" />
        <Text style={{ marginLeft: 10, color: '#735DEC', fontSize: 18, fontWeight: 'bold' }}>
          Back
        </Text>
      </TouchableOpacity>

      {/* "Saved" Text */}
      <View
        style={{
          position: 'absolute',
          top: 50,
          right: 20,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: '#fff',
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          zIndex: 1, // Ensure it's on top of other elements
        }}
      >
        <Icon name="heart-outline" size={24} color="#735DEC" />
        <Text style={{ marginLeft: 10, color: '#735DEC', fontSize: 18, fontWeight: 'bold' }}>
          Saved
        </Text>
      </View>

      {/* Saved Outfits List */}
      <View style={{ flex: 1, marginTop: 100, padding: 10 }}> {/* marginTop added for spacing */}
        {savedOutfits.length === 0 ? (
          <Text style={{ textAlign: 'center', fontSize: 18, color: '#735DEC' }}>
            No saved outfits
          </Text>
        ) : (
          <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {savedOutfits.map((outfit, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('ImageDetailScreen', {
                    imageUri: outfit.uri,
                    tags: outfit.tags || [], // fallback to empty array
                  })
                }
              >
                <Image
                  source={outfit.uri}
                  style={{ width: 150, height: 150, borderRadius: 10, margin: 5 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </LinearGradient>
  );
}


function ImageDetailScreen({ route, toggleSaveImage, savedOutfits, navigation }) {
  const { imageUri, tags } = route.params;
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = savedOutfits.some((outfit) => outfit.uri === imageUri);
    setIsSaved(saved);
  }, [savedOutfits, imageUri]);

  return (
    <LinearGradient
      colors={['#FAD0C4', '#FFD1FF']}
      style={{ flex: 1, alignItems: 'center' }} // Center everything
    >
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          top: 40,
          left: 20,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#fff',
          borderRadius: 20,
        }}
      >
        <Icon name="arrow-back" size={24} color="#735DEC" />
        <Text style={{ marginLeft: 10, color: '#735DEC' }}>Back</Text>
      </TouchableOpacity>

      {/* Go to Saved Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SavedOutfitsScreen')}
        style={{
          position: 'absolute',
          top: 40,
          right: 20,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#fff',
          borderRadius: 20,
        }}
      >
        <Icon name="heart-outline" size={24} color="#735DEC" />
        <Text style={{ marginLeft: 10, color: '#735DEC' }}>Saved</Text>
      </TouchableOpacity>

      {/* Image Container */}
      <View
        style={{
          width: '90%',
          height: '60%',
          marginTop: 100, // Adjusted to move image upwards
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 15,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={imageUri}
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
          resizeMode="contain"
        />
      </View>

      {/* Container for Tags and Heart Button */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#F0F0F0', // Whitish gray background
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',
        }}
      >
        {/* Tags */}
        <Text style={{ fontSize: 18, color: '#735DEC', marginBottom: 20 }}>
          Tags: {tags.join(', ')}
        </Text>

        {/* Heart Button */}
        <TouchableOpacity
          onPress={() => toggleSaveImage(imageUri, tags)}
          style={{
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          }}
        >
          <Icon name={isSaved ? 'heart' : 'heart-outline'} size={30} color="#735DEC" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}















// ✅ Stack Navigator Setup
const Stack = createStackNavigator();

export default function App() {
  const [savedOutfits, setSavedOutfits] = useState([]);

  const toggleSaveImage = (imageUri) => {
    setSavedOutfits((prevOutfits) => {
      if (prevOutfits.some((outfit) => outfit.uri === imageUri)) {
        return prevOutfits.filter((outfit) => outfit.uri !== imageUri);
      } else {
        return [...prevOutfits, { uri: imageUri }];
      }
    });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />

        <Stack.Screen name="FourthScreen">
   {(props) => <FourthScreen {...props} savedOutfits={savedOutfits} toggleSaveImage={toggleSaveImage} />}
  </Stack.Screen>

        {/* ✅ Pass savedOutfits to these two screens */}
        <Stack.Screen name="SavedOutfitsScreen">
          {props => (
            <SavedOutfitsScreen
              {...props}
              savedOutfits={savedOutfits}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="ImageDetailScreen">
  {props => (
    <ImageDetailScreen
      {...props}
      savedOutfits={savedOutfits}
      toggleSaveImage={toggleSaveImage} // ✅ Add this line
    />
  )}
</Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>
  );  
}



// ✅ Styles
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
//this is the new ImageDetails
  container: { flex: 1 },
  estiloText: { fontSize: 32, fontWeight: 'bold', marginTop: 50, textAlign: 'center' },
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 },
  tag1: { padding: 5, backgroundColor: '#735DEC', color: '#fff', borderRadius: 20, margin: 5 },
  expandedPanel: { position: 'absolute', width: '100%', bottom: 0 },
  closeButton: { alignSelf: 'flex-start', marginBottom: 20 },
  panelText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  panelOptions: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },
  optionButton: { padding: 10, margin: 5, borderRadius: 20, backgroundColor: '#735DEC' },
  pressedButton: { backgroundColor: '#9b7fd4' },
  optionText: { color: '#fff', fontSize: 14 },
  pressedText: { color: '#000' },
  bottomNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 10, color: '#735DEC' },
  expandButton: { padding: 10 },
  loginWrapper: {
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 100,
  },

  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
  },

  emailInput: {
    width: '88%',
    height: 50,
    backgroundColor: '#C68EFD', // purple background
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 15,
    color: '#ffffff', // white text
    borderWidth: 1,
    borderColor: '#ffffff',
    fontSize: 14,
  },

  passwordInput: {
    width: '88%',
    height: 50,
    backgroundColor: '#C68EFD',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffffff',
    fontSize: 14,
  },

  forgotContainer:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  forgotPassword:{
      textAlign: 'left', 
      alignSelf: 'flex-start', 
      marginLeft: 205, 
      color: '#735DEC',
      fontWeight: 'bold',
  },

  clickNow: {
    position: 'absolute',
    left: 38,  
    top: 100,
    color: '#735DEC',
    fontWeight: 'bold',
  },

  accText:{
    position: 'absolute',
    right: -34,
    top: 100,
  },

  loginButtonContainer: {
    width: 300, // Adjust the width to fit your layout
    height: 55, // Adjust the height for the button
    backgroundColor: '#5555fa', // A soft blue-green color for the button
    borderRadius: 10, // Rounded corners
    alignItems: 'center', // Center the text inside the button
    justifyContent: 'center', // Vertically center the text
    shadowColor: '#000', // Optional: for a shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // This is for Android shadow
  },

  //Register page
  container: {
    flex: 1, // Ensure gradient fills the screen
  },
  
  safeArea: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },

  contentWrapper: {
    width: width * 0.85, // Use 85% of screen width
    maxWidth: 400, // Max width for larger screens
    alignItems: 'center', // Center items within the wrapper
    paddingTop: 20, // Add some padding at the top
    paddingBottom: 20, // Add some padding at the bottom
    gap: 12,
  },

  title: {
    fontSize: 28, // Font size from image
    fontWeight: 'bold',
    color: 'black', // White text color against the darker background
    textAlign: 'left', // Align text to the left
    width: '100%', // Take full width of the wrapper
    marginBottom: 40, // Space below the title
    paddingLeft: 5, // Small padding to align slightly off the edge
  },
  
  input1: {
    width: '100%',
    height: 55,
    backgroundColor: '#C68EFD', // Dark purple background from image
    borderRadius: 12, // Rounded corners
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#FFFFFF', // White text color inside input
    marginBottom: 10, // Space between inputs
  },

  registerButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#7B68EE', // Brighter blue/purple button color from image
    borderRadius: 12, // Match input field rounding
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15, // Space above the button
    marginBottom: 30, // Space below the button
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  registerButtonText: {
    color: '#FFFFFF', // White text on the button
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginLinkContainer: {
    flexDirection: 'row', // Arrange text side-by-side
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Space above this section
  },

  loginLinkText: {
    fontSize: 15,
    color: 'black', 
  },

  loginLinkActionText: {
    color: '#735DEC', 
    fontWeight: 'bold',
    marginLeft: 5, // Space between the two text parts
  },

  buttonLogin:{
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },

  container: {
    flex: 1,  
    backgroundColor: '#FAD0C4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 30,
    marginBottom: 20,
    marginTop: -250,
  },

  welcomeText: {
    fontSize: 29,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },

  image1: {
    width: 350,
    height: 300,
    borderRadius: 30,
    marginBottom: 20,
    marginTop: -250,
  },

  buttonWrapper: {
    position: 'absolute',
    bottom: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    width: 70,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5555fa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 40,
    color: 'white',
  },

  subText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', 
    textAlign: 'center',
    marginTop: 10,
  },

  nextButtonWrapper: {
    position: 'absolute',
    bottom: 145,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  nextButtonContainer: { //Button para sa continue
    paddingHorizontal: 70,
    paddingVertical: 12,
    borderRadius: 40,
    backgroundColor: '#5555fa',
  },
  
  nextButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  
  textGroup: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  
  welcomeText1: {
    fontSize: 29,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center',
  },
  
  subText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  label: { //label for age gender and style
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
    alignSelf: 'flex-start', 
    marginLeft: 43,          
  }, 
  
  dropdownContainer: {
    borderWidth: 2,
    borderColor: '#8E7DBE',
    borderRadius: 8,
    marginBottom: 20,
    width: 250,
    backgroundColor: '#C68EFD',
  },
  
  picker: {
    height: 50,
    width: '100%',
  },
  
  input: {
    borderWidth: 2,
    borderColor: '#8E7DBE',
    borderRadius: 8,
    padding: 10,
    width: 250,
    backgroundColor: '#C68EFD',
    textAlign: 'left',
  },

  innerContainer: {
    flex: 1,
    marginTop: 90,
    paddingHorizontal: 20,
    width: '100%',
  },
  
  formGroup: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
  },

  nextButtonWrapper1: {
    position: 'flex',
    bottom: -55,
    alignItems: 'center',
    justifyContent: 'center',
  },

 //ForgotPass Style
 forgotContainer2: {
  flex: 1,
  padding: 30,
  justifyContent: 'center',
},

forgotTitle: {
  fontSize: 28,
  fontWeight: 'bold',
  color: '#000',
  marginBottom: 10,
},

forgotSubtitle: {
  fontSize: 14,
  color: '#333',
  marginBottom: 40,
},

forgotInput: {
  backgroundColor: '#9747FF',
  color: '#fff',
  borderRadius: 8,
  paddingHorizontal: 16,
  height: 50,
  marginBottom: 20,
},

forgotSendButton: {
  backgroundColor: '#5555fa',
  borderRadius: 8,
  paddingVertical: 14,
  alignItems: 'center',
  marginBottom: 30,
},

forgotSendButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},

forgotBottomTextContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
},

forgotBottomText: {
  color: '#000',
},

forgotLinkText: {
  color: '#5F00D4',
  fontWeight: 'bold',
},

// OTP
OTPcontainer: {
  flex: 1,
  padding: 24,
  justifyContent: 'center',
},

OTPtitle: {
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 10,
},

OTPsubtitle: {
  fontSize: 14,
  marginBottom: 30,
  color: '#333',
},

OTPContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 30,
},

OTPInput: {
  width: 50,
  height: 50,
  borderRadius: 10,
  backgroundColor: '#9747FF',
  color: '#fff',
  textAlign: 'center',
  fontSize: 18,
},

OTPverifyButton: {
  backgroundColor: '#5555fa',
  borderRadius: 10,
  paddingVertical: 14,
  alignItems: 'center',
  marginBottom: 20,
},

OTPverifyButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},

OTPresendText: {
  textAlign: 'center',
  color: '#222',
},

OTPresendLink: {
  color: '#5A00CC',
  fontWeight: 'bold',
},

// Reset Password
NPcontainer: {
  flex: 1,
  padding: 24,
  justifyContent: 'center',
},

NPtitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 12,
  color: '#000',
},

NPsubtitle: {
  fontSize: 14,
  marginBottom: 30,
  color: '#333',
},

NPinput: {
  width: '100%',
  height: 50,
  borderRadius: 10,
  backgroundColor: '#9747FF',
  color: '#fff',
  paddingHorizontal: 16,
  fontSize: 16,
  marginBottom: 16,
},

NPbutton: {
  backgroundColor: '#5555fa',
  borderRadius: 10,
  paddingVertical: 14,
  alignItems: 'center',
  marginTop: 10,
},

NPbuttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},

//ChangePassword
CPcontainer: {
  flex: 1,
  padding: 24,
  justifyContent: 'center',
  alignItems: 'center',
},

CPicon: {
  width: 100,
  height: 100,
  marginBottom: 30,
},

CPtitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#000',
  marginBottom: 8,
  textAlign: 'center',
},

CPsubtitle: {
  fontSize: 14,
  color: '#333',
  textAlign: 'center',
  marginBottom: 40,
},

CPbutton: {
  backgroundColor: '#5555fa',
  borderRadius: 10,
  paddingVertical: 14,
  paddingHorizontal: 40,
},

CPbuttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},

// Navbar
estiloText: {
  position: 'absolute',
  top: 60,
  left: 20,
  fontSize: 24,
  fontWeight: 'bold',
  color: '#000',
  zIndex: 10,
},

tagContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: 100, // Adjust as needed below "ESTILO"
  paddingHorizontal: 20,
  gap: 10,
},

tag1: {
  borderWidth: 1,
  borderColor: '#735DEC',
  borderRadius: 20,
  paddingVertical: 7,
  paddingHorizontal: 14,
  fontSize: 14,
  color: '#735DEC',
  fontWeight: 'bold',
},

flatListContainer: {
  marginTop: 10,
  flex: 1,
  width: '100%',
  paddingHorizontal: 10,
  marginBottom: 70, // to stay above navbar
},

imageItem: {
  flex: 1,
  margin: 5,
  aspectRatio: 0.7,
  borderRadius: 10,
  overflow: 'hidden',
  backgroundColor: '#ddd',
},

imageStyle: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},


bottomNavbar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 70,
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 10, 
},

navItem: {
  alignItems: 'center',
  justifyContent: 'center',
},

navText: {
  fontSize: 12,
  color: '#735DEC',
  marginTop: 4,
},

//expand navbar
expandedPanel: {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 100,
},

panelText: {
  fontSize: 16,
  color: '#333',
  fontWeight: 'bold',
  marginTop: 100,
  marginBottom: 10,
  marginLeft: 20,
  alignSelf: 'flex-start',
},

closeButton: {
  position: 'absolute',
  top: 50,
  right: 160,
  zIndex: 101,
},
 
panelOptions: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: 10,
  marginHorizontal: 20,
},

optionButton: {
  width: 80,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  alignItems: 'center',
  justifyContent: 'center',
},

optionText: {
  color: '#333',
  fontWeight: 'bold',
},

panelText1: {
  fontSize: 16,
  color: '#333',
  fontWeight: 'bold',
  marginTop: 20,
  marginLeft: 20,
  alignSelf: 'flex-start',
},

panelOptions1: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: 10,
  paddingHorizontal: 20,
  marginBottom: 10,
  marginTop: 10,
},

panelOptions2: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: 10,
  paddingHorizontal: 20,
  marginBottom: 10,
  marginTop: 10,
},

//kulay pag pinindot button
pressedButton: {
  backgroundColor: '#393E46',
  borderColor: '#393E46',
},
pressedText: {
  color: '#fff',
},

// CSS pag click image
detailContainer: {
  flex: 1,
  backgroundColor: '#fff',
},

detailImage: {
  width: '100%',
  height: 600,
},

infoContainer: {
  padding: 30,
  backgroundColor: '#f1f1f1',
  flex: 1,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  marginTop: -10,
},

description: {
  marginTop: 10,
  color: '#444',
  fontWeight: 'bold',
  fontSize: 16,
},

variationTitle: {
  marginTop: 20,
  fontWeight: 'bold',
  fontSize: 20,
  color: '#222',
},

tagsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 10,
},

tag: {
  backgroundColor: '#fff',
  borderColor: '#ccc',
  borderWidth: 1,
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 12,
  margin: 4,
},

tagText: {
  color: '#333',
},

closeButton1: {
  position: 'absolute',
  top: 40, // Adjust depending on status bar height
  right: 20,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: 8,
  borderRadius: 20,
  zIndex: 10,
},















  
  
});

