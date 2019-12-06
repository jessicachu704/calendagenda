package q1;

import java.util.Scanner;
import java.text.DecimalFormat;

/**
 * <p>The Statistics application will computer both
 * the mean and the standard deviation of the following
 * inputs and display it as floating points.
 * </p>
 *
 * @author Sung Na
 * @version 1.0
 */
public class Statistics {
    /**
     * <p>This is the main method that drives the program.</p>
     *
     * @param args command line arguments.
     */
    public static void main(String[] args) {
        
        // Max number of input values is fifty
        final int fifty = 50;
        int[] inputValues = new int[fifty];
        
        // Declare variable for total and n
        int total = 0;
        int n = 0;
        
        Scanner scan = new Scanner(System.in);
        int i = 0;
        
        while (scan.hasNextInt()) {
            inputValues[i] = scan.nextInt();
            total += inputValues[i];
            n++;
            i++;
        }
        
        // Calculating the mean
        double mean = (double) total / n;
        
        // Numerator of the formula
        double numerator = 0.0;
        for (int j = 0; j < n; j++) {
            numerator += Math.pow((inputValues[j] - mean), 2);
        }
        
        // Denominator of the formula
        double denominator; 
        if (n == 1) {
            denominator = 0.0;
        } else {
            denominator = Math.sqrt(numerator / (n - 1));
        }
        
        // Decimal format to display numbers in floating point
        DecimalFormat df = new DecimalFormat("#.##");
        
        // Print out the results of the mean and the standard deviation
        System.out.println("Mean:\t" + df.format(mean));
        System.out.println("Standard deviation:\t" + df.format(denominator));
        
        scan.close();
        
    }

};
