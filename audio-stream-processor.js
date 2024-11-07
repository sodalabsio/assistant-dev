class AudioProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.buffer = new Float32Array(0);
        this.offset = 0;
    }

    process(inputs, outputs, parameters) {
        const output = outputs[0];
        const channelData = output[0];

        if (this.buffer.length - this.offset < channelData.length) {
            this.port.postMessage('needmore');
        }

        const available = Math.min(this.buffer.length - this.offset, channelData.length);
        channelData.set(this.buffer.subarray(this.offset, this.offset + available));

        if (available < channelData.length) {
            channelData.fill(0, available);
        }

        this.offset += available;

        return true;
    }
}

registerProcessor('audio-processor', AudioProcessor);
