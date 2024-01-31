package com.snakegame;

import javax.swing.JFrame;

public class GameFrame extends JFrame {

	GameFrame(){
//		GamePanel panel=new GamePanel();
//		this.add(panel);
//		or
		this.add(new GamePanel());
		this.setTitle("Snake");
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setResizable(false);
		this.pack();//when we add components to the jframe 
					//the pack() fn makes sure everything fits perfectly in the jframe
		this.setVisible(true);
		this.setLocationRelativeTo(null);//it makes the window appear in the center of the screen
	}
}
