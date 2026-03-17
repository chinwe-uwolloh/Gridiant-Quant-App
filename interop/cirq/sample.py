import cirq

q = cirq.LineQubit(0)
circuit = cirq.Circuit(cirq.H(q), cirq.measure(q, key='m'))
print(circuit)
