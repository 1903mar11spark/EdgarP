package com.edgar.one;


public class FizzBuzz {

	public static void fizzBuzz1() {
		for(int i=1;i<=100;i++) {
			if((i % 3 == 0) && (i % 5 == 0)) {
				System.out.print(" fizzbuzz ");
			    
			} else if(i % 5 == 0) {
				System.out.print(" buzz ");
				
			} else if((i % 3 == 0)) {
				System.out.print("fizz ");
			}
			else {
				System.out.print(i + " ");
			}

		}
	}
	
	
	public static void fizzBuzz2(int m,int n){
		
		for(int i=m;i<=n;i++) {
			if((i % 3 == 0) && (i % 5 == 0)) {
				System.out.print(" fizzbuzz ");
			    
			}else if(i % 5 == 0) {
				System.out.print(" buzz ");
				
			}else if((i % 3 == 0)) {
				System.out.print("fizz ");
			}
			else {
				System.out.print(i + " ");
			}

		}
	}
	
	
	public static void fizzBuzz3(int m, int n, int fizzNum, int buzzNum){
		
		for(int i=m;i<=n;i++) {
			if((i % fizzNum == 0) && (i % buzzNum == 0)) {
				System.out.print(" fizzbuzz ");
			    
			}else if(i % buzzNum == 0) {
				System.out.print(" buzz ");
				
			}else if((i % fizzNum == 0)) {
				System.out.print("fizz ");
			}
			else {
				System.out.print(i + " ");
			}

		}
	}
	
	public static void fizzBuzz4(int m, int n, int[] numbers, String[] terms){
				
		for(int i=m;i<=n;i++) {
			if((i % numbers[0] == 0) && (i % numbers[1] == 0)) {
				System.out.print(terms[2]);
			    
			}else if(i % numbers[1] == 0) {
				System.out.print(terms[1]);
				
			}else if((i % numbers[0] == 0)) {
				System.out.print(terms[0]);
			}
			else {
				System.out.print(i + " ");
			}

		}
	}



}
