package domain;

import java.util.*;

public class Deck {

	private List<Card> cards;
	
	public Deck() {
		cards = new ArrayList<>();
	}

	public List<Card> getCards() {
		return cards;
	}
	
	public void setupDeck() {
		createCards();
		shuffleCards();
	}

	private void shuffleCards() {
		Collections.shuffle(cards);
	}

	private void createCards() {
		for(Color c : Color.values()) {
			for(int i = 2; i < 11; i++) {
				cards.add(new Card(c, i, false));
			}
			for (int i = 0; i < 3; i++) {
				cards.add(new Card(c, 0, false));
			}
		}
	}
	
	
	
	

}