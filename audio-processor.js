class AudioProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super();
        this.frameSize = options.processorOptions.frameSize || 160;
        this.buffer = new Float32Array(this.frameSize);
        this.bufferIndex = 0;
    }

    process(inputs, outputs, parameters) {
        const input = inputs[0];
        if (input.length > 0) {
            const inputChannel = input[0];

            for (let i = 0; i < inputChannel.length; i++) {
                this.buffer[this.bufferIndex] = inputChannel[i];
                this.bufferIndex++;

                if (this.bufferIndex >= this.frameSize) {
                    // Calculate audio level
                    const audioLevel = this.buffer.reduce((sum, sample) =>
                        sum + Math.abs(sample), 0) / this.frameSize;

                    // Send frame to main thread
                    this.port.postMessage({
                        audioData: new Float32Array(this.buffer),
                        audioLevel: audioLevel * 100
                    });

                    this.bufferIndex = 0;
                }
            }
        }

        return true;
    }
}

registerProcessor('audio-processor', AudioProcessor);
