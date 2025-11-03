# Programming software for Apple

## Swift 
*Summary: Simple programming language created by Apple in 2014 for iOS as logic substitution for Object C.* \
Download site: https://www.swift.org/ \
Apple Intro site: https://developer.apple.com/swift/
![Swift](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Swift.png){width=250px height=100px}

**Pros:**
1. Requires less coding compared to Object C providing more time to develop apps
2. Apples support in Swift makes its a reliable choice for future investment.
3. Performs 8.6 times faster than python and 2.6 times faster than Object C.
4. High safety, strong typing system with shorter feedback loop resulting in codes to be fixed in early development.
5. Decrease in memory footprint, usually apps call to static library increasing file size and load time. Swift allows dynamic library, this means it takes more time to call but also reduces memory footprint making apps lightweight (use less space)

**Cons:**
1. Still a relatively new language, so in large scale projects that contain both C and Swift migrating between version could have issues. Introduction of ABI stability platform has provided a solution to backward compability to all versions.
2. Limited number of experience Swift developer. According to stack overflow 2023 data, only 4.65% professional developers have extensive experience with Swift.
3. Lack of support for earlier version of iOS. Swift is not compatible for versions iOS 7, macOS 10.9 and anything before. Though stats show that only 5% of device runs on these versions.

**Syntax Examples:**
1. To set a constant variable -> let language = "Swift" 
    * Can't be changed once set -> language = "Swift2" result in error when calling language.
2. To set variable -> var Hello = "Hello" 
    * This one can be changed Hello = "Bonjour" -> print(Hello) will result in Bonjour now.
3. For loops Ex: \
for index in 1...5 { \
    print("\(index) times 5 is \(index * 5)") \
}\
Result in \
1 times 5 is 5 \
2 times 5 is 10 \
3 times 5 is 15 \
4 times 5 is 20 \
5 times 5 is 25 

**Opinion** \
Very similar syntax as in Java, some noticable difference are that semi colons ";" are not required in each line unless different commands are writtin in same line. Also when creating variable in Java different variable would be created depending on status (integar, string etc.) Swift can use let for most situations. 

**Learn more about Swift coding** \
https://docs.swift.org/swift-book/documentation/the-swift-programming-language

