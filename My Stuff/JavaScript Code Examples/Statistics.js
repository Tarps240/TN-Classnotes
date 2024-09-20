class Statistics {
  constructor(data) {
    this.data = data;
  }

  // Count the number of elements in the dataset
  count() {
    return this.data.length;
  }

  // Calculate the sum of all elements in the dataset
  sum() {
    return this.data.reduce((acc, val) => acc + val, 0);
  }

  // Find the minimum value in the dataset
  min() {
    return Math.min(...this.data);
  }

  // Find the maximum value in the dataset
  max() {
    return Math.max(...this.data);
  }

  // Calculate the range of the dataset
  range() {
    return this.max() - this.min();
  }

  // Calculate the mean (average) of the dataset
  mean() {
    return Math.round(this.sum() / this.count());
  }

  // Calculate the median of the dataset
  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      return sorted[mid];
    }
  }

  // Calculate the mode of the dataset
  mode() {
    const frequency = {};
    this.data.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
    });
    const maxFrequency = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(key => frequency[key] === maxFrequency);
    return { mode: Number(modes[0]), count: maxFrequency };
  }

  // Calculate the variance of the dataset
  variance() {
    const mean = this.mean();
    const squaredDifferences = this.data.map(val => (val - mean) ** 2);
    const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / this.count();
    return variance.toFixed(1);
  }

  // Calculate the standard deviation of the dataset
  stdDev() {
    return Math.sqrt(this.variance()).toFixed(1);
  }

  // Calculate the frequency distribution of the dataset
  frequencyDistribution() {
    const frequency = {};
    this.data.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
    });

    const distribution = Object.keys(frequency).map(key => {
      return [(frequency[key] / this.count()) * 100, Number(key)];
    });

    return distribution.sort((a, b) => b[0] - a[0]);
  }

  // Describe the dataset with all statistical measures
  describe() {
    return `
      Count: ${this.count()}
      Sum: ${this.sum()}
      Min: ${this.min()}
      Max: ${this.max()}
      Range: ${this.range()}
      Mean: ${this.mean()}
      Median: ${this.median()}
      Mode: (${this.mode().mode}, ${this.mode().count})
      Variance: ${this.variance()}
      Standard Deviation: ${this.stdDev()}
      Frequency Distribution: ${JSON.stringify(this.frequencyDistribution())}
    `;
  }
}

// Example usage:
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = new Statistics(ages);

console.log(statistics.describe());
