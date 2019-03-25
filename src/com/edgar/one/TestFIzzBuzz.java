package com.edgar.one;

public class TestFIzzBuzz extends FizzBuzz {
		public static void main(String[] args) {
			//fizzBuzz1();
			//fizzBuzz2(1,100);
			//fizzBuzz3(1,10, 3, 5);
			
			
			String[] strArray = new String[]{" Fizz "," Buzz ", "Fizzbuzz "};
			int[] numArray = {3,5};
			fizzBuzz4(1,100, numArray ,strArray);
		}

}
