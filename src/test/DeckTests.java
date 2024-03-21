package test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import domain.Deck;

class DeckTests {
	
	private Deck deck;
	
	@BeforeEach
	void before() {
		deck = new Deck();
	}
	

	@Test
	void createCards() {
		deck.setupDeck();
		Assertions.assertEquals(60, deck.getCards().size());
	}

}
