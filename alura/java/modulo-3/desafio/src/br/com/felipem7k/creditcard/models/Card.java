package br.com.felipem7k.creditcard.models;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Card {
    private int limit;
    private List<Purchase> history = new ArrayList<>();

    public Card(int limit) {
        this.limit = limit;
    }

    public int getLimit() {
        return limit;
    }

    public boolean tryPayment(Purchase transaction) {
        if (this.getLimit() < transaction.getPrice()) {
            return false;
        }

        limit -= transaction.getPrice();

        history.add(transaction);
        
        return true;
    }

    public List<Purchase> getHistory() {
        history.sort(Comparator.comparing(Purchase::getPrice));
        return history;
    }

}
