package domain;

public class Card {

	private Color color;
	private int value;
	private boolean isFaceUp;
	
	public Card(Color color, int value, boolean isFaceUp) {
		setColor(color);
		setFaceUp(isFaceUp);
		setValue(value);
	}
	
	
	//GET&SET
	public Color getColor() {
		return color;
	}
	public int getValue() {
		return value;
	}
	public boolean isFaceUp() {
		return isFaceUp;
	}
	private void setColor(Color color) {
		this.color = color;
	}
	private void setValue(int value) {
		this.value = value;
	}
	private void setFaceUp(boolean isFaceDown) {
		this.isFaceUp = isFaceDown;
	}
	
	
	
}